# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Answer.destroy_all
Question.destroy_all

questions = [
  {q: "Excel to CSV with UTF8 encoding [closed]",
   b: "I have an Excel file that has some Spanish characters (tildes, etc.) that I need to convert to a CSV file to use as an import file. However, when I do Save As CSV it mangles the special Spanish characters that aren't ASCII characters. It also seems to do this with the left and right quotes and long dashes that appear to be coming from the original user creating the Excel file in Mac.

    Since CSV is just a text file I'm sure it can handle a UTF8 encoding, so I'm guessing it is an Excel limitation, but I'm looking for a way to get from Excel to CSV and keep the non-ASCII characters intact.",
   a: "A simple workaround is to use Google Spreadsheet. Paste (values only if you have complex formulas) or import the sheet then download CSV. I just tried a few characters and it works rather well. NOTE: Google Sheets does have limitations when importing. See here. NOTE: Be careful of sensitive data with Google Sheets.EDIT: Another alternative - basically they use VB macro or addins to force the save as UTF8. I have not tried any of these solutions but they sound reasonable."},
  {q: "How to prevent excel from appearing and disappearing?", b: "No matter what lang every time I have written code to use the excel object I always have this problem. Say I'm running a loop and within the loop I am opening & closing workbooks. I have the visible property on the Application class is set to false, while the loop is running I open an excel file from the file system manually then everything goes to hell. The problem I suspect is because when I opened the file manually it uses the same excel process that I instantiated in code, and excel will then show & hide for every file that it opens from the code until it is done. The problem is that I could also break the running code if I managed to close the excel window. Is there anyway to prevent the os from using the same process that I created in the code, Is there a way to keep the automated app isolated from other operation that involves the excel process so the 2 can not interfere with one another with the exception that if they happened to access the same file.", a: "Use the Application.ScreenUpdating property to avoid UI glitches in Excel. Turn screen updating off to speed up your macro code. You won't be able to see what the macro is doing, but it will run faster. Remember to set the ScreenUpdating property back to True when your macro ends"}

]

questions.each do |q|
  Question.create(question: q[:q], body: q[:b]).answers.create(body: q[:a])
end
