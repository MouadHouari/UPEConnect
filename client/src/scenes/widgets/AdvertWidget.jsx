import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Annonces
        </Typography>
        <Typography color={medium}>upecofficiel</Typography>
      </FlexBetween>

       {/* Annonces2 */}

       <Typography color={main} m="1rem 0">
      Infos Travaux - Restructuration de la dalle du Campus Centre.
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/upecinfo1.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
      La livraison de la nouvelle dalle est prévue pour la fin du 1er semestre 2025.
      </Typography>


       {/* Annonces1 */}
       <Typography color={main} m="1rem 0">
    Les Journées Arts et Culture de l'UPEC
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/upecinfo3.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
      Du 31 mars au 4 avril 2025, l'UPEC vous invite à participer aux Journées Arts et Culture dans l'Enseignement Supérieur (JACES). Venez découvrir la richesse artistique de votre université et stimuler votre créativité.
      </Typography>

       
     
    {/* Annonces3 */}

    <Typography color={main} m="1rem 0">
       Évaluation des formations : votre avis compte, partagez-le !
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/upecinfo2.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
      Du 10 février au 30 avril, l'UPEC invite ses étudiants à évaluer leur formation. En répondant de façon anonyme au questionnaire adressé par e-mail, 
      chacun peut ainsi contribuer à améliorer sa formation et les conditions d'études au sein de l'université..
      </Typography>
      
    </WidgetWrapper>
  );
};

export default AdvertWidget;
