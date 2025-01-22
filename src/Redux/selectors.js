// All Themes
export const getAllTaskAThemes = (store) => store.quotes.task_a_themes;
export const getAllTaskBThemes = (store) => store.quotes.task_b_themes;

// Themes
export const getTaskATheme = (store) => store.quotes.task_a_theme;
export const getTaskBTheme = (store) => store.quotes.task_b_theme;

// Generated Quotes
export const getTaskAQuotes = (store) =>
  store.quotes.task_a_quotes.map((quote) => quote.text);
export const getTaskBQuotes = (store) =>
  store.quotes.task_b_quotes.map((quote) => quote.text);

// Task A/B Toggles
export const getTaskAToggle = (store) => store.quotes.task_a_toggle;
export const getTaskBToggle = (store) => store.quotes.task_b_toggle;

// Breakdown Analysis
export const getTaskABreakdownThemes = (store) =>
  (() => {
    var breakdownThemes = [store.quotes.task_a_theme];
    store.quotes.task_a_quotes.map((quote) => {
      quote.themes.map((theme) => {
        if (!breakdownThemes.includes(theme.theme)) {
          breakdownThemes.push(theme.theme);
        }
      });
    });
    return breakdownThemes;
  })();
export const getTaskBBreakdownThemes = (store) =>
  (() => {
    var breakdownThemes = [store.quotes.task_b_theme];
    store.quotes.task_b_quotes.map((quote) => {
      quote.themes.map((theme) => {
        if (!breakdownThemes.includes(theme.theme)) {
          breakdownThemes.push(theme.theme);
        }
      });
    });
    return breakdownThemes;
  })();
export const getTaskABreakdown = (store) =>
  (() => {
    const selectedBreakdownTheme = store.quotes.task_a_breakdown_theme;
    var taskABreakdown = [];
    store.quotes.task_a_quotes.map((quote) => {
      var attributed_text = [null, null];
      quote.themes.map((theme) => {
        if (theme.theme === selectedBreakdownTheme) {
          attributed_text[0] = theme.attributed_text_start;
          attributed_text[1] = theme.attributed_text_end;
        }
      });
      taskABreakdown.push(attributed_text);
    });
    return taskABreakdown;
  })();
export const getTaskBBreakdown = (store) =>
  (() => {
    const selectedBreakdownTheme = store.quotes.task_b_breakdown_theme;
    var taskBBreakdown = [];
    store.quotes.task_b_quotes.map((quote) => {
      var attributed_text = [null, null];
      quote.themes.map((theme) => {
        if (theme.theme === selectedBreakdownTheme) {
          attributed_text[0] = theme.attributed_text_start;
          attributed_text[1] = theme.attributed_text_end;
        }
      });
      taskBBreakdown.push(attributed_text);
    });
    return taskBBreakdown;
  })();

// Gamsat Themes
export const getAllGamsatThemes = (store) => store.quotes.gamsat_themes;
export const getGamsatTitle = (store) => store.quotes.gamsat_title;

// isLoading
export const getQuoteLoading = (store) => store.isLoading.quotes;
export const getThemeLoading = (store) => store.isLoading.themes;
