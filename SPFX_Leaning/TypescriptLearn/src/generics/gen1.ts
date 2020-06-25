interface IAccount {
    id: string;
    balance: number;
}

interface ICustomerAccount extends IAccount {
    creditlimit: number;
}

let a1 : IAccount = {
    id: "A001",
    balance: 1000
}

let a2 : IAccount = {
    id: "A002",
    balance: 4000
}

function AddAccounts<T extends IAccount>(fa: T, sa : T) : T {
    let result : T = {
        id: fa.id + " - " + sa.id,
        balance : fa.balance + sa.balance
    } as T;

    return result;
}

let ja = AddAccounts<IAccount>(a1,a2);


console.log(`Joint account details : 
    ID : ${ ja.id}
    Balance: ${ ja.balance }
`);