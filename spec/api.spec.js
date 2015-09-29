var frisby = require('frisby');

frisby.create('Get access token')
  .get('http://localhost:3000/api/token')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectBodyContains('access_token')
    .expectJSONTypes({
        access_token : String,
        token_type : String,
        expires_in : Number
    })
    //the access token should contains {token_type : 'Bearer'}
    .expectJSON({token_type : 'Bearer'})
    .expectJSON({
        access_token : function(val) {
            //this is a valid sample access token
            var sample_token = 'mF_9.B5f-4.1JqM';

            expect(val.length).toEqual(sample_token.length);
        }
    })
    .afterJSON(function (res) {
      frisby.create('Get secured resource')
        .get('http://localhost:3000/api/secure')
        .addHeader('authorization', 'Bearer ' + res.access_token)
        .expectStatus(200)
      .toss()
     })
.toss();

frisby.create('Get secured resource without token')
  .get('http://localhost:3000/api/secure')
    .expectStatus(401)
.toss();

frisby.create('Get access token')
  .get('http://localhost:3000/api/water')
    .expectStatus(404)
.toss();
