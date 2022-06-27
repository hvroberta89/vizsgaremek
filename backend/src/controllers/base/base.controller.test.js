const { mockRequest, mockResponse } = require('jest-mock-req-res');

const baseService = require('./base.service')();
const baseController = require('./base.controller')();
const jestConfig = require('../../../jest.config');
const User = require('../../models/user');

jest.mock('./base.service.js');

describe('Base controller unit test with User', () => {
  const nextFunction = jest.fn()
  let response;

	beforeEach(() => {
		const mockData = [
      {
        "_id": "1",
        "user_name": "ricsirics",
        "first_name": "Richard",
        "last_name": "Torres",
        "gender": "Férfi",
        "birth_date": {
          "year": 1994,
          "month": 9,
          "day": 11
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3944,
          "city": "Balaton",
          "street": "Attila utca",
          "number": 37
        },
        "email": "ricsitorres@test.com",
        "mobil_number": "+36-20/120-3801",
        "password": "testpass",
        "role": 2
      },
      {
        "_id": "2",
        "user_name": "crazy3",
        "first_name": "Kamu",
        "last_name": "Downs",
        "gender": "Férfi",
        "birth_date": {
          "year": 1982,
          "month": 9,
          "day": 9
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3915,
          "city": "Egerbocs",
          "street": "Almásy Pál utca",
          "number": 2
        },
        "email": "kimudowns@test.com",
        "mobil_number": "+36-20/206-3251",
        "password": "testpass",
        "role": 1
      },
      {
        "_id": "3",
        "user_name": "zizizy",
        "first_name": "Zita",
        "last_name": "Hudson",
        "gender": "Nő",
        "birth_date": {
          "year": 1984,
          "month": 8,
          "day": 10
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3987,
          "city": "Eger",
          "street": "Kilián István utca",
          "number": 12
        },
        "email": "zyzyzy@test.com",
        "mobil_number": "+36-20/917-5115",
        "password": "testpass",
        "role": 2
      },
      {
        "_id": "4",
        "user_name": "redun89",
        "first_name": "Robitok",
        "last_name": "Allen",
        "gender": "Nő",
        "birth_date": {
          "year": 1997,
          "month": 5,
          "day": 2
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3904,
          "city": "Mikófalva",
          "street": "Dobó István utca",
          "number": 45
        },
        "email": "robitoktok@test.com",
        "mobil_number": "+36-70/486-9711",
        "password": "testpass",
        "role": 1
      },
      {
        "_id": "5",
        "user_name": "dindindin",
        "first_name": "Doring",
        "last_name": "Wilkinson",
        "gender": "Nő",
        "birth_date": {
          "year": 1987,
          "month": 6,
          "day": 26
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3903,
          "city": "Nagyvisnyó",
          "street": "Bajcsy-Zsilinszky Endre utca",
          "number": 46
        },
        "email": "dindins@test.com",
        "mobil_number": "+36-20/163-9389",
        "password": "testpass",
        "role": 2
      }
		];
    
		baseService.__setMockData(mockData);
		response = mockResponse();
  });
    
  describe('FindAll test', () => {
    test('Find all of the entities', () => {
      const request = mockRequest()
  
      return baseController.findAll(request, response, nextFunction)
        .then(() => {
          expect(baseService.findAll).toHaveBeenCalled()
          expect(response.json).toHaveBeenCalledWith(baseService.mockData)
        });
    });  
  });

  describe('FindOne tests', () => {
    test('Find one with valid id', () => {
      const ID = '1';
      const request = mockRequest({
        params: {
          id: ID
        }
      });
  
      return baseController.findOne(request, response, nextFunction)
        .then(() => {
          expect(baseService.findOne).toHaveBeenCalledWith(ID)
          expect(response.json).toHaveBeenCalledWith(baseService.mockData.find(item => item._id === ID))
        });
    });
  });

  test('create', () => {
    const newData = {
        "user_name": "testtest",
        "first_name": "Proba",
        "last_name": "Test",
        "gender": "Nő",
        "birth_date": {
          "year": 1987,
          "month": 6,
          "day": 26
        },
        "address": {
          "country": "Hungary",
          "zipCode": 3903,
          "city": "Nagyvisnyó",
          "street": "Bajcsy-Zsilinszky Endre utca",
          "number": 46
        },
        "email": "test@test.com",
        "mobil_number": "+36-20/003-9389",
        "password": "testpass",
        "role": 2
    };
    const request = mockRequest({
      body: newData
    });

    return baseController.create(request, response, nextFunction)
      .then(() => {
        expect(baseService.create).toHaveBeenCalledWith(newData)
        expect(response.status).toHaveBeenCalledWith(201)
        expect(response.json).toHaveBeenCalledWith(newData)
        expect(baseService.mockData.length).toBe(6)
        expect(baseService.mockData[5]).toEqual(newData)
      })
  });

  test('update', () => {
    const UPDATE =  {
      "_id": "2",
      "user_name": "crazike",
      "first_name": "Kamu Test",
      "last_name": "Ups",
      "gender": "Nő",
      "birth_date": {
        "year": 1982,
        "month": 9,
        "day": 9
      },
      "address": {
        "country": "Hungary",
        "zipCode": 3915,
        "city": "Egerbocs",
        "street": "Almásy Pál utca",
        "number": 2
      },
      "email": "kimudowns@test.com",
      "mobil_number": "+36-20/206-3251",
      "password": "testpass",
      "role": 1
    }

    const request = mockRequest({
      params: {
        id: UPDATE._id
      },
      body: UPDATE
    })

    return baseController.updateOne(request, response, nextFunction)
      .then(() => {
        expect(baseService.updateOne).toHaveBeenCalledWith(UPDATE._id, UPDATE)
        expect(response.json).toHaveBeenCalledWith(UPDATE)
        expect(baseService.mockData.find(item => item._id === UPDATE._id)).toEqual(UPDATE)
      })
  })

  test('delete', () => {
    const ID = '1'
    const DELETED = baseService.mockData.find(item => item._id === ID)
    const request = mockRequest({
      params: {
        id: ID
      }
    })

    return baseController.deleteOne(request, response, nextFunction)
      .then(() => {
        expect(baseService.deleteOne).toHaveBeenCalledWith(ID)
        expect(response.json).toHaveBeenCalledWith(DELETED)
        expect(baseService.mockData.length).toBe(4)
      })
  })
})