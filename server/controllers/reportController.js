
const Report = require("../models/userReport");
const User = require("../models/userModel");


const reportController = {
  report: async (req, res) => {

        const userDescription = req.body.description;
        const userLocation = req.body.location;
        const userAvatar = req.body.avatar
        const user = User;
        const userId = await user.findOne({email:'20084498@mail.wit.ie'}).exec();

      // const rf_token = createToken.access({ id: user._id });
      // res.cookie("_apprftoken", rf_token, {
      //   httpOnly: true,
      //   path: "/api/auth/access",
      //   maxAge: 24 * 60 * 60 * 1000, // 24h
      // });
        
        const newReport = new Report({
          description: userDescription,
          location: userLocation,
          avatar: userAvatar,
          user: userId._id
        });



        
        try {
            await newReport.save( (err, newReportResults) => {
                if (err) res.end('Error Saving.');
                res.redirect('/problems');
                res.end();
            });
    
        } catch(err) {
            console.log(err);
            res.end();
        }
  
  },


  

  reportinfo: async (req, res) => {

    const userReports = await Report.find({},  (err, reportData) => {
        if (err) throw err;
        if (reportData) {
            res.end(JSON.stringify(reportData));
        } else {
            res.end();
        }
    });
  },

  delete: async (req, res) => {
    try {
      // get info
      const userDescription = req.body.description;
      const userLocation = req.body.location;

      // update
      await Report.findOneAndDelete({ _id }, { description, location });
      // success
      res.status(200).json({ msg: "Delete success." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
}

module.exports = reportController;