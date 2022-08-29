$(document).ready(function() {

    // generate output strings
    $("#submit").click(function() {
      let variableNames = $("#uiString").val();
      let engLocalizedValue = $("#engText").val();
      let thLocalizedValue = $("#thText").val();
      let uiStringOutput = "  static String get " + variableNames + " => LanguageLocalizations.getText('" + variableNames + "');";
      let engLocalizedValuesOutput = "'" + variableNames + "': '" + engLocalizedValue + "',";
      let engLocalizedValuesTestOutput = "expect(LanguageLocalizations.getText('" + variableNames + "'), '" + engLocalizedValue + "',);";
      let thLocalizedValuesOutput = "'" + variableNames + "': '" + thLocalizedValue + "',";
      let thLocalizedValuesTestOutput = "expect(LanguageLocalizations.getText('" + variableNames + "'), '" + thLocalizedValue + "',);";
      $("textarea#uiStringOutput").val(uiStringOutput);
      $("textarea#engLocalizedValuesOutput").val(engLocalizedValuesOutput);
      $("textarea#engLocalizedValuesTestOutput").val(engLocalizedValuesTestOutput);
      $("textarea#thLocalizedValuesOutput").val(thLocalizedValuesOutput);
      $("textarea#thLocalizedValuesTestOutput").val(thLocalizedValuesTestOutput);
    });

    // clear all fields
    $("#clear").click(function(){
        $('input[type=text]').each(function() {
            $(this).val('');
        });
        $('textarea').each(function() {
            $(this).val('');
        });
    });
  });
