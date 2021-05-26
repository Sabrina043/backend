
function getApimoovice() {

    for (var i = 0; i < Apimoovice.length; i++) {

        var currentId = moovice[i].url.substring().replace("/", "");

        if (currentId === id) {
            return moovice[i].name;
        }
        
    }
}
module.exports = getApimoovice()
