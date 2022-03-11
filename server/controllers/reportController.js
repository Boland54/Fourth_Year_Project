
const Report = require("../models/userReport");


const reportController = {
  report: async (req, res) => {

        const userDescription = req.body.description;
        const userLocation = req.body.location;
  
        
        const newReport = new Report({
          description: userDescription,
          location: userLocation,
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

    const userReports = await Report.find({}, (err, reportData) => {
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