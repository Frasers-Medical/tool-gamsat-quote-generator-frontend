import apiQuotes from "../Data/api_quotes.json";
import apiQuotesThemes from "../Data/api_quotes_themes.json";
import apiQuotesGamsat from "../Data/api_quotes_gamsat.json";

export const getQuotes = async (taskATheme, taskBTheme) => {
  if(taskATheme && taskBTheme)
    return apiQuotes.filter(
      (quote) => quote.themes.theme === taskATheme || quote.themes.theme === taskBTheme
    )
  return apiQuotes;
};

export const getThemes = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    return apiQuotesThemes;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};

export const getGamsatThemes = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    console.log(apiQuotesGamsat);
    return apiQuotesGamsat;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};
