import { useTranslation } from "react-i18next";
import { TranslationStyled } from "./TranslationStyled";

function TranslationBottoms(): JSX.Element {
  const { i18n } = useTranslation();
  return (
    <TranslationStyled className="traslation_bottom">
      <button type="submit" onClick={() => i18n.changeLanguage("en")}>
        <img src="/src/assets/img/UK.svg" alt="English" />
      </button>
      <button type="submit" onClick={() => i18n.changeLanguage("es")}>
        <img src="/src/assets/img/ES.svg" alt="Spanish" />
      </button>
      <button type="submit" onClick={() => i18n.changeLanguage("cat")}>
        <img src="/src/assets/img/Cat.svg" alt="Catalan" />
      </button>
    </TranslationStyled>
  );
}

export default TranslationBottoms;
