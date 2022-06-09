import {CityType, GovernmentBuildingsType, HouseType} from '../02-objects/02_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2,
                buildAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3,
                buildAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test.skip('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Happy street')
})
test.skip('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South str')

    // expect(city.governmentBuildings[3].type).toBe('FIRE-STATION')
    // expect(city.governmentBuildings[3].budget).toBe(500000)
    // expect(city.governmentBuildings[3].staffCount).toBe(1000)
    // expect(city.governmentBuildings[3].address.street.title).toBe('South str')
})
test.skip('Houses should be destroyed', () => {
    const demolishHousesOnTheStreet = (city: CityType, street: string) => city.houses = city.houses.filter(t => t.address.street.title !== street);

    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})
test.skip('list of streets titles of houses', () => {

    const getHousesOnTheStreet = (houses: HouseType[], street: string) => houses.filter(h => h.address.street.title === street);

    let happyHouses = getHousesOnTheStreet(city.houses, 'Happy street');
    let whiteHouses = getHousesOnTheStreet(city.houses, 'White street');


    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);

})
test('get buildings with correct staff count', () => {

    const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: GovernmentBuildingsType[], num: number) => governmentBuildings.filter(g => g.staffCount > num)

let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');

})

