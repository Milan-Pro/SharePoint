var a1 = {
    id: "A001",
    balance: 1000
};
var a2 = {
    id: "A002",
    balance: 4000
};
function AddAccounts(fa, sa) {
    var result = {
        id: fa.id + " - " + sa.id,
        balance: fa.balance + sa.balance
    };
    return result;
}
var ja = AddAccounts(a1, a2);
console.log("Joint account details : \n    ID : " + ja.id + "\n    Balance: " + ja.balance + "\n");
