// the only purpose of creating this file is to export all the repository we have created
// in a single object, 
// rather than importing individual repositories, we can just import a single object, that's it
// if we have 10 repository then we need 10 import statements, but with this file
// we can import them in a single statement 

module.exports = {
    CityRepository: require('./city.repository')
}