const removeChars = (s) =>
    s.replace(/[^a-z ]/ig, "")

log(removeChars(".tree1"))
log(removeChars("that's a pie&ce o_f p#ie!"))
log(removeChars('john.dope@dopington.com'))
