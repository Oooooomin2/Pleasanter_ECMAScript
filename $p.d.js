
const $p = {
    /*
    画面上の値変更と$p.dataへの格納を同時に行うことが出来るメソッドです。
    https://pleasanter.net/fs/publishes/523994/edit
    */
    set: ($control, val) => $p.set($control, val),
    /*
    AjaxのPOSTリクエストによる値のレコード取得が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524012
    */
    apiGet: getRequest,
    /*
    AjaxのPOSTリクエストによる新規レコードの作成が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524072/edit
    */
    apiCreate: createRequest,

    /*
    AjaxのPOSTリクエストによるレコード削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524076/edit
    */
    apiUpdate: updateRequest,

    /*
    AjaxのPOSTリクエストによるレコード削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/524076
    */
    apiDelete: deleteRequest,

    /*
    AjaxのPOSTリクエストによるユーザ取得が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768085/edit
    */
    apiUsersGet: usersGetRequest,

    /*
    AjaxのPOSTリクエストによるユーザ作成が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768207/edit
    */
    apiUsersCreate: usersCreateRequest,

    /*
    AjaxのPOSTリクエストによるユーザの更新が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768263/edit
    */
    apiUsersUpdate: usersUpdateRequest,

    /*
    AjaxのPOSTリクエストによるユーザの削除が可能なメソッドです。
    https://pleasanter.net/fs/publishes/768274/edit
    */
    apiUsersDelete: usersDeleteRequest,

    /*
    AjaxのPOSTリクエストによるメールの送信が可能なメソッドです。
    マニュアルは近日公開されるかと思います。
    */
    apiSendMail: sendMailRequest,

    /*
    レコードのIdを表示します。
    https://pleasanter.net/fs/publishes/523872/edit
    */
    id: () => $p.id(),

    /*
    サーバにデータを送信するメソッドです。
    マニュアルはいつか公開されるかと思います。
    */
    send: data => $p.send(data),

    /*
    サイトのidを表示します。
    https://pleasanter.net/fs/publishes/524917/edit
    */
    siteId: () => $p.siteId(),

    /*
    対象項目のカラム名（データベースの列名）を取得するメソッドです。
    https://pleasanter.net/fs/publishes/523992
    */
    getColumnName: name => $p.getColumnName(name),

    /*
    対象の項目名から要素を取得するメソッドです。
    https://pleasanter.net/fs/publishes/523996/edit
    */
    getControl: labelName => $p.getControl(labelName),

    /*
    対象の項目名からFieldを取得するメソッドです。
    https://pleasanter.net/fs/publishes/617813/edit
    */
    getField: labelName => $p.getField(labelName),

    /*
    画面下に表示されるメッセージを削除することができるメソッドです。
    https://pleasanter.net/fs/publishes/524707/edit
    */
    clearMessage: () => $p.clearMessage(),

    /*
    画面下にメッセージを表示させるメソッドです。
    https://pleasanter.net/fs/publishes/524716
    */
    setMessage: (target, value) => $p.setMessage(target, value),

    /*
    ログインIdを取得するメソッドです。
    https://pleasanter.net/fs/publishes/527928/edit
    */
    loginId: () => $p.loginId(),

    /*
    ログインしているユーザのユーザIdを取得するメソッドです。
    https://pleasanter.net/fs/publishes/527943/edit
    */
    userId: () => $p.userId(),

    /*
    ログインしているユーザの名前を取得するメソッドです。
    https://pleasanter.net/fs/publishes/527948/edit
    */
    userName: () => $p.userName(),

    /*
    テーブルの種類を取得するメソッドです。
    マニュアルはいつか公開されるかと思います。
    */
    referenceType: () => $p.referenceType(),

    /*
    一覧画面のtdタグの要素を取得するメソッドです。
    https://pleasanter.net/fs/publishes/533695/edit
    */
    getGridCell: (id, name) => $p.getGridCell(id, name),

    /*
    一覧画面にて、レコードの表示名のデータが何列目にあるか取得するメソッドです。
    https://pleasanter.net/fs/publishes/533699/edit
    */
    getGridColumnIndex: name => $p.getGridColumnIndex(name),

    /*
    一覧画面にて、レコードの表示名のデータが何列目にあるか取得するメソッドです。
    https://pleasanter.net/fs/publishes/533714
    */
    getGridRow: id => $p.getGridRow(id),

    events: {
        /*
        バリデーションチェックを行う前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/522549/edit
        */
        before_validate_Create: () => { },
        before_validate_Update: () => { },
        before_validate_Delete: () => { },
        before_validate_BulkDelete: () => { },
        before_validate_BulkUpdate: () => { },

        /*
        バリデーションチェックを行った後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523850/edit
        */
        after_validate_Create: () => { },
        after_validate_Update: () => { },
        after_validate_Delete: () => { },
        after_validate_BulkDelete: () => { },
        after_validate_BulkUpdate: () => { },

        /*
        サーバへデータを送信する前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523851/edit
        */
        before_send_Create: () => { },
        before_send_Update: () => { },
        before_send_Delete: () => { },
        before_send_BulkDelete: () => { },
        before_send_BulkUpdate: () => { },

        /*
        サーバへデータを送信した後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523852/edit
        */
        after_send_Create: () => { },
        after_send_Update: () => { },
        after_send_Delete: () => { },
        after_send_BulkDelete: () => { },
        after_send_BulkUpdate: () => { },

        /*
        サーバへデータを送信後、画面内容を更新する前に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523853/edit
        */
        before_set_Create: () => { },
        before_set_Update: () => { },
        before_set_Delete: () => { },
        before_set_BulkDelete: () => { },
        before_set_BulkUpdate: () => { },

        /*
        サーバへデータを送信後、画面内容を更新した後に実行するメソッドです。
        https://pleasanter.net/fs/publishes/523854/edit
        */
        after_set_Create: () => { },
        after_set_Update: () => { },
        after_set_Delete: () => { },
        after_set_GridRows: () => { },
        after_set_BulkDelete: () => { },
        after_set_BulkUpdate: () => { },

        /*
        編集画面を読み込んだときに実行するメソッドです。
        https://pleasanter.net/fs/publishes/523855/edit
        */
        on_editor_load: () => { },

        /*
        一覧画面を読み込んだとき、もしくはフィルタ等で表示する内容が変わったときに実行するメソッドです。
        https://pleasanter.net/fs/publishes/523861/edit
        */
        on_grid_load: () => { },
    }
}


const getRequest = ({
    async = true,
    id = 0,
    data = dataOfGetRequest,
    done = (data = getResponseData) => { },
    fail = data => { },
    always = data => { }
}) => $p.apiGet();

const createRequest = ({
    async = true,
    id = 0,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiCreate();

const updateRequest = ({
    async = true,
    id = 0,
    data = dataOfCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUpdate();

const deleteRequest = ({
    async = true,
    id = 0,
    data = dataOfBaseRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiDelete();

const usersGetRequest = ({
    async = true,
    data = dataOfUsersGetRequest,
    done = (data = getResponseData) => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersGet();

const usersCreateRequest = ({
    async = true,
    data = dataOfUsersCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersCreate();

const usersUpdateRequest = ({
    async = true,
    id = 0,
    data = dataOfUsersCreateAndUpdateRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersUpdate();

const usersDeleteRequest = ({
    async = true,
    id = 0,
    data = dataOfBaseRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiUsersDelete();

const sendMailRequest = ({
    async = true,
    id = 0,
    data = dataOfSendMailRequest,
    done = data => { },
    fail = data => { },
    always = data => { }
}) => $p.apiSendMail();

const dataOfBaseRequest = ({
    ApiVersion = 1.1,
    ApiKey = ""
}) => { };

const dataOfGetRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    View: ViewItems
};

const dataOfUsersGetRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    View: ViewUsers
}

const dataOfCreateAndUpdateRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    ClassHash: Class,
    NumHash: Num,
    DateHash: Date,
    DescriptionHash: Description,
    CheckHash: Check,
    Title: "",
    Body: "",
    StartTime,
    CompletionTime,
    WorkValue,
    ProgressRate,
    RemainingWorkValue,
    Status: 0,
    Manager: 0,
    Owner: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    ItemTitle: ""
};

const dataOfUsersCreateAndUpdateRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    Password: "",
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

const dataOfSendMailRequest = {
    ApiVersion: 1.1,
    ApiKey: "",
    From: "",
    To: "",
    Cc: "",
    Bcc: "",
    Title: "",
    Body: ""
};

const ViewItems = {
    ColumnFilterHash: ColumnFilterHashItems,
    ColumnSorterHash: {}
};

const ViewUsers = {
    ColumnFilterHash: ColumnFilterHashUsers,
    ColumnSorterHash: {}
};

let SiteId;
let IssueId;
let ResultId;
let Body;
let StartTime;
let CompletionTime;
let WorkValue;
let ProgressRate;
let RemainingWorkValue;
let UpdateTime;
let Ver;
let Title;
let Status;
let Manager;
let Owner;
let Comments;
let Creator;
let Updator;
let CreatedTime;
let ItemTitle;
let ClassA;
let ClassB;
let ClassC;
let ClassD;
let ClassE;
let ClassF;
let ClassG;
let ClassH;
let ClassI;
let ClassJ;
let ClassK;
let ClassL;
let ClassM;
let ClassN;
let ClassO;
let ClassP;
let ClassQ;
let ClassR;
let ClassS;
let ClassT;
let ClassU;
let ClassV;
let ClassW;
let ClassX;
let ClassY;
let ClassZ;
let NumA;
let NumB;
let NumC;
let NumD;
let NumE;
let NumF;
let NumG;
let NumH;
let NumI;
let NumJ;
let NumK;
let NumL;
let NumM;
let NumN;
let NumO;
let NumP;
let NumQ;
let NumR;
let NumS;
let NumT;
let NumU;
let NumV;
let NumW;
let NumX;
let NumY;
let NumZ;
let DateA;
let DateB;
let DateC;
let DateD;
let DateE;
let DateF;
let DateG;
let DateH;
let DateI;
let DateJ;
let DateK;
let DateL;
let DateM;
let DateN;
let DateO;
let DateP;
let DateQ;
let DateR;
let DateS;
let DateT;
let DateU;
let DateV;
let DateW;
let DateX;
let DateY;
let DateZ;
let DescriptionA;
let DescriptionB;
let DescriptionC;
let DescriptionD;
let DescriptionE;
let DescriptionF;
let DescriptionG;
let DescriptionH;
let DescriptionI;
let DescriptionJ;
let DescriptionK;
let DescriptionL;
let DescriptionM;
let DescriptionN;
let DescriptionO;
let DescriptionP;
let DescriptionQ;
let DescriptionR;
let DescriptionS;
let DescriptionT;
let DescriptionU;
let DescriptionV;
let DescriptionW;
let DescriptionX;
let DescriptionY;
let DescriptionZ;
let CheckA;
let CheckB;
let CheckC;
let CheckD;
let CheckE;
let CheckF;
let CheckG;
let CheckH;
let CheckI;
let CheckJ;
let CheckK;
let CheckL;
let CheckM;
let CheckN;
let CheckO;
let CheckP;
let CheckQ;
let CheckR;
let CheckS;
let CheckT;
let CheckU;
let CheckV;
let CheckW;
let CheckX;
let CheckY;
let CheckZ;
let UserId;
let Ver;
let LoginId;
let Name;
let UserCode;
let Birthday;
let Gender;
let Language;
let TimeZone;
let DeptCode;
let Body;
let LastLoginTime;
let PasswordExpirationTime;
let PasswordChangeTime;
let NumberOfLogins;
let NumberOfDenial;
let TenantManager;
let Disabled;
let Lockout;
let LockoutCounter;
let Comments;
let Creator;
let Updator;
let CreatedTime;
let UpdatedTime;
let StatusCode;
let Offset;
let PageSize;
let TotalCount;
let ColumnSorterHash = {};

const ColumnFilterHashItems = {
    SiteId: 0,
    IssueId: 0,
    ResultId: 0,
    Body: "",
    StartTime,
    CompletionTime,
    WorkValue,
    ProgressRate,
    RemainingWorkValue,
    UpdateTime,
    Ver,
    Title: "",
    Status: "",
    Manager: 0,
    Owner: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    ItemTitle,
    ClassA: "",
    ClassB: "",
    ClassC: "",
    ClassD: "",
    ClassE: "",
    ClassF: "",
    ClassG: "",
    ClassH: "",
    ClassI: "",
    ClassJ: "",
    ClassK: "",
    ClassL: "",
    ClassM: "",
    ClassN: "",
    ClassO: "",
    ClassP: "",
    ClassQ: "",
    ClassR: "",
    ClassS: "",
    ClassT: "",
    ClassU: "",
    ClassV: "",
    ClassW: "",
    ClassX: "",
    ClassY: "",
    ClassZ: "",
    NumA: 0,
    NumB: 0,
    NumC: 0,
    NumD: 0,
    NumE: 0,
    NumF: 0,
    NumG: 0,
    NumH: 0,
    NumI: 0,
    NumJ: 0,
    NumK: 0,
    NumL: 0,
    NumM: 0,
    NumN: 0,
    NumO: 0,
    NumP: 0,
    NumQ: 0,
    NumR: 0,
    NumS: 0,
    NumT: 0,
    NumU: 0,
    NumV: 0,
    NumW: 0,
    NumX: 0,
    NumY: 0,
    NumZ: 0,
    DateA,
    DateB,
    DateC,
    DateD,
    DateE,
    DateF,
    DateG,
    DateH,
    DateI,
    DateJ,
    DateK,
    DateL,
    DateM,
    DateN,
    DateO,
    DateP,
    DateQ,
    DateR,
    DateS,
    DateT,
    DateU,
    DateV,
    DateW,
    DateX,
    DateY,
    DateZ,
    DescriptionA: "",
    DescriptionB: "",
    DescriptionC: "",
    DescriptionD: "",
    DescriptionE: "",
    DescriptionF: "",
    DescriptionG: "",
    DescriptionH: "",
    DescriptionI: "",
    DescriptionJ: "",
    DescriptionK: "",
    DescriptionL: "",
    DescriptionM: "",
    DescriptionN: "",
    DescriptionO: "",
    DescriptionP: "",
    DescriptionQ: "",
    DescriptionR: "",
    DescriptionS: "",
    DescriptionT: "",
    DescriptionU: "",
    DescriptionV: "",
    DescriptionW: "",
    DescriptionX: "",
    DescriptionY: "",
    DescriptionZ: "",
    CheckA: true,
    CheckB: true,
    CheckC: true,
    CheckD: true,
    CheckE: true,
    CheckF: true,
    CheckG: true,
    CheckH: true,
    CheckI: true,
    CheckJ: true,
    CheckK: true,
    CheckL: true,
    CheckM: true,
    CheckN: true,
    CheckO: true,
    CheckP: true,
    CheckQ: true,
    CheckR: true,
    CheckS: true,
    CheckT: true,
    CheckU: true,
    CheckV: true,
    CheckW: true,
    CheckX: true,
    CheckY: true,
    CheckZ: true
};

const ColumnFilterHashUsers = {
    UserId: 0,
    Ver,
    LoginId: "",
    Name: "",
    UserCode: "",
    Birthday,
    Gender,
    Language,
    TimeZone,
    DeptCode: "",
    Body: "",
    LastLoginTime,
    PasswordExpirationTime,
    PasswordChangeTime,
    NumberOfLogins: 0,
    NumberOfDenial: 0,
    TenantManager,
    Disabled,
    Lockout: true,
    LockoutCounter: 0,
    Comments: "",
    Creator: 0,
    Updator: 0,
    CreatedTime,
    UpdatedTime
};

const getResponseData = {
    StatusCode,
    Response: {
        Offset,
        PageSize,
        TotalCount,
        Data: {
            ClassHash: Class,
            NumHash: Num,
            DateHash: Date,
            DescriptionHash: Description,
            CheckHash: Check
        }
    }
};

const Class = {
    ClassA: "",
    ClassB: "",
    ClassC: "",
    ClassD: "",
    ClassE: "",
    ClassF: "",
    ClassG: "",
    ClassH: "",
    ClassI: "",
    ClassJ: "",
    ClassK: "",
    ClassL: "",
    ClassM: "",
    ClassN: "",
    ClassO: "",
    ClassP: "",
    ClassQ: "",
    ClassR: "",
    ClassS: "",
    ClassT: "",
    ClassU: "",
    ClassV: "",
    ClassW: "",
    ClassX: "",
    ClassY: "",
    ClassZ: ""
};

const Num = {
    NumA: 0,
    NumB: 0,
    NumC: 0,
    NumD: 0,
    NumE: 0,
    NumF: 0,
    NumG: 0,
    NumH: 0,
    NumI: 0,
    NumJ: 0,
    NumK: 0,
    NumL: 0,
    NumM: 0,
    NumN: 0,
    NumO: 0,
    NumP: 0,
    NumQ: 0,
    NumR: 0,
    NumS: 0,
    NumT: 0,
    NumU: 0,
    NumV: 0,
    NumW: 0,
    NumX: 0,
    NumY: 0,
    NumZ: 0
};

const Date = {
    DateA,
    DateB,
    DateC,
    DateD,
    DateE,
    DateF,
    DateG,
    DateH,
    DateI,
    DateJ,
    DateK,
    DateL,
    DateM,
    DateN,
    DateO,
    DateP,
    DateQ,
    DateR,
    DateS,
    DateT,
    DateU,
    DateV,
    DateW,
    DateX,
    DateY,
    DateZ
};

const Description = {
    DescriptionA: "",
    DescriptionB: "",
    DescriptionC: "",
    DescriptionD: "",
    DescriptionE: "",
    DescriptionF: "",
    DescriptionG: "",
    DescriptionH: "",
    DescriptionI: "",
    DescriptionJ: "",
    DescriptionK: "",
    DescriptionL: "",
    DescriptionM: "",
    DescriptionN: "",
    DescriptionO: "",
    DescriptionP: "",
    DescriptionQ: "",
    DescriptionR: "",
    DescriptionS: "",
    DescriptionT: "",
    DescriptionU: "",
    DescriptionV: "",
    DescriptionW: "",
    DescriptionX: "",
    DescriptionY: "",
    DescriptionZ: ""
};

const Check = {
    CheckA: true,
    CheckB: true,
    CheckC: true,
    CheckD: true,
    CheckE: true,
    CheckF: true,
    CheckG: true,
    CheckH: true,
    CheckI: true,
    CheckJ: true,
    CheckK: true,
    CheckL: true,
    CheckM: true,
    CheckN: true,
    CheckO: true,
    CheckP: true,
    CheckQ: true,
    CheckR: true,
    CheckS: true,
    CheckT: true,
    CheckU: true,
    CheckV: true,
    CheckW: true,
    CheckX: true,
    CheckY: true,
    CheckZ: true
};


/* これより以下はサーバーサイドスクリプトの内容です。 */

const context = {
    FormStringRaw: () => { },
    FormString: () => { },
    Ajax: () => { },
    //モバイルアクセスかどうかbool値を入力
    Mobile: () => { },
    ApplicationPath: () => { },
    //返却されるURL
    AbsoluteUri: () => { },
    //返却されるApplicationPath以降のPath
    AbsolutePath: () => { },
    Url: () => { },
    UrlReferrer: () => { },
    Query: () => { },
    //idがControllerのvalue値
    Controller: () => { },
    //idがActionのvalue値
    Action: () => { },
    TenantId: () => { },
    SiteId: () => { },
    Id: () => { },
    Groups: () => { },
    TenantTitle: () => { },
    SiteTitle: () => { },
    RecordTitle: () => { },
    DeptId: () => { },
    UserId: () => { },
    LoginId: () => { },
    Language: () => { },
    TimeZoneInfo: () => { },
    HasPrivilege: () => { },
    ApiVersion: () => { },
    ApiRequestBody: () => { },
    RequestDataString: () => { },
    ContentType: () => { },
};

const model = {
    IssueId: () => {},
    ResultId: () => {},
    Creator:()=>{},
    CreatedTime: () => {},
    UpdatedTime: () => {},
    Ver: () => {},
    Title: () => {},
    Body: () => {},
    StartTime: () => {},
    CompletionTime: () => {},
    WorkValue: () => {},
    ProgressRate: () => {},
    RemainingWorkValue: () => {},
    Status: () => {},
    Manager: () => {},
    Owner: () => {},
    Comments: () => {},
    Locked: () => {}
}

//APIの実装です。
const items = {
    Get: (id, json = dataOfGetRequest) => {},
    New: () => {},
    Create: (id, model = dataOfCreateAndUpdateRequest) =>{},
    Update: (id, model = dataOfCreateAndUpdateRequest) => {},
    Delete: (id = dataOfGetRequest) => {},
    BulkDelete: (id, json = dataOfGetRequest) => {} 
}