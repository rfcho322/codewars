/* CREDIT CARD MASK
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

function maskify(cc) {
    //INPUT CAN BE A STRING OR A NUMBER
    //IF THE LENGTH IS 4 OR LESS RETURN ORIGINAL INPUT
    //MASK ALL OTHER DIGITS WITH '#'
    //DISPLAY ONLY THE LAST 4 DIGITS
    //CONCATENATE THE MASK STRING WITH THE LAST 4 CHARACTERS AND RETURN
      
      cc = cc.toString()
      
      if (cc.length <= 4) {
        return cc
      }
      
      let maskNum = "#".repeat(cc.length - 4)
      let lastFour = cc.slice(-4)
      
      return maskNum + lastFour;
}