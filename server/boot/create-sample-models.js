module.exports = function(app) {
  app.dataSources.mongo.automigrate('MapAsset', function(err) {
    if (err) throw err;

    app.models.MapAsset.create([{
      name: 'Alamo Square Park',
      description: 'A hilltop park with views of the City',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94117',
      geoJson: '{ "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -122.43470907211304, 37.7763839383027 ] } }',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }, {
      name: 'St Mary\'s Medical Center',
      addressLine1: '450 Stanyan St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94117',
      geoJson: '{ "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -122.45367228984833, 37.77402853821361 ] } }',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }, {
      name: 'Chevron',
      description: 'Corner of Fell St & Masonic Ave',
      addressLine1: '1698 Fell St',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94117',
      geoJson: '{ "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -122.44560956954957, 37.77321494311367 ] } }',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], function(err, mapAssets) {
      if (err) throw err;

      console.log('Models created: \n', mapAssets);
    });
  });
};
