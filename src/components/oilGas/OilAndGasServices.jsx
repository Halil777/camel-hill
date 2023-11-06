import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OilAndGasServices = () => {
  const servicesData = {
    "Primary Services": [
      "Coiled Tubing Technologies",
      "Hydraulic Fracturing",
      "Drilling and Workover",
      "Preparation of Killing Liquids",
      "OPP and RIR",
      "Production of Liquid Nitrogen",
      "Development and Testing of Wells",
      "Well Completion",
      "Development of New Technologies",
    ],
    "Secondary Services": [
      "Milling of Ports, Traffic Jams, etc. (DDM, Jars, Separators, Sludge Traps)",
      "Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool",
      "Small Diameter Side-Track Drilling (Fishbone)",
      "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing",
      "Fishing Work (Rotators, Magnets, Non-Standard Tools)",
      "Perforation on Coiled Tubing (Abrasive, Cumulative)",
      "GIS on Coiled Tubing (Pipe with Cable, Stand-Alone Instruments)",
      "GIS with Bypass Systems (Y-Tool)",
      "Development of Jet Pumps on Coiled Tubing",
      "Underbalanced CT Drilling",
    ],
  };

  // Array of service descriptions
  const serviceDescriptions = {
    "Coiled Tubing Technologies":
      "Coiled Tubing Technologies involve the use of continuous coiled tubing to perform various well intervention operations in the oil and gas industry. This technology offers advantages such as wellbore cleanout, nitrogen kick, and more. Coiled tubing units are equipped with a reel that contains the tubing, and it can be deployed into the well without the need for jointed pipe sections. This method is cost-effective and versatile, making it suitable for a wide range of applications in the field.",

    "Hydraulic Fracturing":
      "Hydraulic Fracturing, also known as fracking, is a technique used to stimulate the production of hydrocarbons from reservoirs by creating fractures in the rock formation. High-pressure fluid is injected into the wellbore to create cracks in the formation, allowing the oil or gas to flow more freely. This process is essential for enhancing well productivity and extracting hydrocarbons from tight or unconventional reservoirs.",

    "Drilling and Workover":
      "Drilling and Workover operations involve the drilling of new wells and the maintenance or enhancement of existing wells. This includes activities such as drilling exploratory wells, re-drilling existing wells, and performing maintenance to improve production. Skilled professionals use advanced equipment and technology to ensure the efficiency and safety of drilling and workover operations.",

    "Preparation of Killing Liquids":
      "Preparation of Killing Liquids refers to the creation of specialized fluids used in well control operations. Killing fluids are formulated to control pressure and wellbore stability during drilling, workover, and other operations. Properly prepared killing fluids are crucial for ensuring the safety and integrity of the well.",

    "OPP and RIR":
      "OPP (Overpressure Protection) and RIR (Risk Identification and Reduction) are crucial safety measures in the oil and gas industry. OPP systems are designed to prevent overpressure incidents in wellbore operations, while RIR involves identifying and mitigating risks associated with drilling, production, and transportation of hydrocarbons. These safety measures are essential for protecting workers and the environment.",

    "Production of Liquid Nitrogen":
      "The Production of Liquid Nitrogen is an essential process in the oil and gas industry. Liquid nitrogen is used for various applications, including well stimulation, purging pipelines, and cooling equipment. It is produced by cryogenic separation of air and plays a critical role in many industry processes.",

    "Development and Testing of Wells":
      "The Development and Testing of Wells is a critical stage in the exploration and production of hydrocarbons. This involves drilling wells, evaluating reservoir properties, and conducting well tests to determine production potential. Skilled teams employ advanced technologies to optimize well development and ensure the efficient extraction of hydrocarbons.",

    "Well Completion":
      "Well Completion is the process of preparing a newly drilled well for production. This involves installing the necessary equipment, such as casing, tubing, and packers, to allow hydrocarbons to flow to the surface. Well completion is a crucial step in making the well ready for production.",

    "Development of New Technologies":
      "The Development of New Technologies in the oil and gas industry involves ongoing research and innovation to enhance production methods and environmental performance. Innovations include new drilling techniques, reservoir modeling, and sustainable practices that aim to improve efficiency and reduce environmental impact.",

    "Milling of Ports, Traffic Jams, etc. (DDM, Jars, Separators, Sludge Traps)":
      "Milling of Ports, Traffic Jams, and related services are part of the well intervention process. This involves the use of milling tools to remove obstructions in the wellbore, such as scale, cement, or debris. The process helps restore well integrity and improve hydrocarbon production.",

    "Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool":
      "The Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool is a critical step in hydraulic fracturing operations. Specialized tools are used to control the opening and closing of ports in the well casing, allowing for the precise injection of fracking fluids and the release of hydrocarbons.",

    "Small Diameter Side-Track Drilling (Fishbone)":
      'Small Diameter Side-Track Drilling, often referred to as "fishbone" drilling, is a method used to create lateral or sidetrack wellbores from existing wells. This technique involves the controlled deviation of the wellbore to access additional hydrocarbon reserves or optimize well production.',

    "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing":
      "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing is a well intervention process used to remove debris and obstructions from the wellbore. ANPD (Annular Nozzle Pressure Differential) ejector devices are employed to create a high-velocity fluid flow that dislodges and transports particles from the well.",

    "Fishing Work (Rotators, Magnets, Non-Standard Tools)":
      "Fishing Work involves the retrieval of equipment or objects lost in the wellbore, such as broken drillstrings or tools. Rotators, magnets, and non-standard tools are used in the fishing process to capture and retrieve items, ensuring well integrity and safe operations.",

    "Perforation on Coiled Tubing (Abrasive, Cumulative)":
      "Perforation on Coiled Tubing is a method for creating holes or perforations in well casing or reservoir rock. This technique enhances well productivity by providing direct access for hydrocarbon flow. Both abrasive and cumulative perforation methods are employed based on specific well requirements.",

    "GIS on Coiled Tubing (Pipe with Cable, Stand-Alone Instruments)":
      "Geographic Information Systems (GIS) on Coiled Tubing involves the integration of location data with well intervention operations. This technology utilizes coiled tubing equipped with pipe and cable systems or stand-alone instruments to enhance the precision and effectiveness of well services.",

    "GIS with Bypass Systems (Y-Tool)":
      "GIS with Bypass Systems, often implemented with Y-Tool configurations, enables the simultaneous deployment of coiled tubing and other well intervention tools. This allows for versatile well services and improved control of operations within the wellbore.",

    "Development of Jet Pumps on Coiled Tubing":
      "The Development of Jet Pumps on Coiled Tubing is an innovation in well stimulation and production. Jet pumps are used to enhance the flow of hydrocarbons in the well. When mounted on coiled tubing, they offer a flexible and effective solution for optimizing well performance.",

    "Underbalanced CT Drilling":
      "Underbalanced Coiled Tubing (CT) Drilling is a method that maintains the pressure in the wellbore below the reservoir pressure during drilling. This minimizes formation damage and improves drilling efficiency. It is employed in situations where conventional drilling may not be suitable or safe.",
  };

  return (
    <Container>
      <Typography
        variant="h4"
        mt={12}
        textAlign="center"
        data-aos="fade-down"
        data-aos-delay="500"
        gutterBottom
      >
        Oil and Gas Services
      </Typography>

      <Grid container spacing={2}>
        {Object.keys(servicesData).map((category, index) => (
          <Grid item xs={12} key={index}>
            <Typography
              variant="h5"
              mt={3}
              mb={4}
              data-aos="fade-up"
              data-aos-delay="400"
              gutterBottom
              align="center"
            >
              {category}
            </Typography>
            <Grid container spacing={2}>
              {servicesData[category].map((service, serviceIndex) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={6}
                  md={6}
                  data-aos="fade-right"
                  data-aos-delay="400"
                  key={serviceIndex}
                >
                  <Accordion>
                    <AccordionSummary
                      sx={{ background: "lightgrey" }}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Tooltip title={service}>
                        <Typography variant="h6" gutterBottom>
                          {service.slice(0, 50)}...
                        </Typography>
                      </Tooltip>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        {serviceDescriptions[service]}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OilAndGasServices;
