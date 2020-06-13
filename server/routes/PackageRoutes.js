const router = require("express").Router();
const Package = require("../models/PackageModel");

//Add new package route
router.route('/add').post((req, res) => {

    const ObjectId = require("mongoose").Types.ObjectId;

    const name = req.body.name;
    const noOfDays = req.body.noOfDays;
    const noOfPeople = req.body.noOfPeople;
    const remarks = req.body.remarks;
    const packUserId = new ObjectId(req.body.packUserId);

    const newItem = new Package({
        name,
        noOfDays,
        noOfPeople,
        remarks,
        packUserId
    });

    newItem.save()
        .then(() => res.json('Successfully Saved the product to My Packages.'))
        .catch(err => res.status(404).json('Error from server: ' + err));

});

//Get Package by User id
router.route('/packagebyuser/:id').get((req, res) => {
    Package.find({"packUserId" : req.params.id})
        .then(package => res.json({ success: true, package }))
        .catch(err => res.status(404).json('Error from server: ' + err));
});

//Get Package by id route
router.route('/:id').get((req, res) => {
    Package.findById(req.params.id)
        .then(package => res.json(package))
        .catch(err => res.status(404).json('Error from server: ' + err));
});

//Update product by id route
router.route('/update/:id').put((req, res) => {
    Package.findById(req.params.id)
        .then(newItem => {
            newItem.noOfDays = req.body.noOfDays;
            newItem.noOfPeople = req.body.noOfPeople;
            newItem.remarks = req.body.remarks;

            newItem.save()
                .then(() => res.json('Successfully Updated. (Package id: ' + req.params.id + ')'))
                .catch(err => res.status(404).json('Error from server: ' + err));
        })
        .catch(err => res.status(404).json('Error from server: ' + err));
});

//Delete product by id route
router.route('/delete/:id').delete((req, res) => {
    Package.findByIdAndDelete(req.params.id)
        .then(() => res.json('Successfully Deleted. (Package id: ' + req.params.id + ')'))
        .catch(err => res.status(400).json('Error from server: ' + err));
});

module.exports = router;