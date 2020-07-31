MAIN = {}

MAIN.init = function() {

    console.log("Making user entries...");
    MAIN.yuki = new Directory("yuki");
    MAIN.hanako = new Directory("hanako");
    MAIN.tomura = new Directory("tomura");
    MAIN.usrdir.add(MAIN.yuki);
    MAIN.usrdir.add(MAIN.hanako);
    MAIN.usrdir.add(MAIN.tomura);

}