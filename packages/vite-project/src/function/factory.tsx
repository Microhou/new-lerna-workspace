// 变的是什么？ 不变的是什么？

function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function name(name, age, career) {
    let work;
    switch (career) {
        case 'coder':
            work = ['写代码','写系分', '修Bug'];
            break;
        case 'product manager':
            work = ['订会议室', '写PRD', '催更'];
            break;
        default:
            break;
    }

    return new User(name, age, career, work);
}