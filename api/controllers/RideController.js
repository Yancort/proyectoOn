/**
 * RideController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function(req, res){
        Ride.find()
            .then(function(Ride){
                if(!Ride || Ride.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No record found'
                    })
                }

                return res.send({
                    'success':true,
                    'message': 'Record fetched',
                    'data': Ride
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success':false,
                    'message': 'unable to fetch records'
                })
            })
    },

    create: function(req, res){
        sails.log.debug(req.allParams())
        Ride.create(req.allParams())
            .then(function(ride){
                return res.send({
                    'success': true,
                    'message': 'Record created successfully'
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to create record'
                    })
            })
    },

    update: function(req, res){
        sails.log.debug(req.param('id'))

        Ride.update(req.param('id'), req.allParams())
            .then(function(ride){
                return res.send({
                    'success': true,
                    'message': 'Record Update',
                    'data': ride
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to update record'
                })
            })
    },

    delete: function(req, res){
        Ride.destroy(req.param('id'))
            .then(function(ride){
                return res.send({
                    'success': true,
                    'message': 'Record deleted successfully',
                    'data': ride
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to delete record'
                })
            })

    }
};

