const handleName = (ar_name, en_name, language) => {
  return language === "en" ? en_name : ar_name;
};

export default handleName;
