
const Report = require("../models/userReport");
const User = require("../models/userModel");


const reportController = {
  report: async (req, res) => {

        const userDescription = req.body.description;
        const userImagerep = req.body.imagerep;
        const userLat = req.body.latitude;
        const userLong = req.body.longitude;
        const user = req.body.user;

      // const rf_token = createToken.access({ id: user._id });
      // res.cookie("_apprftoken", rf_token, {
      //   httpOnly: true,
      //   path: "/api/auth/access",
      //   maxAge: 24 * 60 * 60 * 1000, // 24h
      // });
        
        const newReport = new Report({
          description: userDescription,
          imagerep: userImagerep,
          latitude : userLat,
          longitude: userLong,
          user : user
        
          
        });



        console.log(newReport);

        
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
}

module.exports = reportController;