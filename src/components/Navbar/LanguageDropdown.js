import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeLanguageAction } from "../../store/actions/languageActions";

import { ChevronLeft, Check } from "heroicons-react";
const languages = [
  "English",
  "Arabic",
  "Danish",
  "Deutsch",
  "English - UK",
  "Espanol",
  "Francais",
  "Italiano",
  "Polski"
];
const LanguageDropdown = props => {
  const { toggleClose, language, changeLanguageAction } = props;
  return (
    <div className="absolute z-30 flex flex-col right-0 w-40 bg-gray-800 rounded-md shadow-xl h-64 mt-2 text-white text-sm p-0">
      <button onClick={toggleClose}>
        <header className="flex items-center justify-between border-b pb-1 bg-gray-700">
          <span>
            <ChevronLeft className="w-4 h-4" />
          </span>
          <span className="flex-grow text-center">Languages</span>
        </header>
      </button>
      <section className="overflow-auto mt-2">
        {languages.map((el, i) => (
          <button
            onClick={() => changeLanguageAction(el)}
            className="block w-full flex items-center justify-between hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer"
            key={i}
          >
            <span>{el}</span>
            {el === language ? <Check className="h-4 w-4" /> : null}
          </button>
        ))}
      </section>
    </div>
  );
};

LanguageDropdown.propTypes = {
  toggleClose: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  changeLanguageAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(
  mapStateToProps,
  { changeLanguageAction }
)(LanguageDropdown);
