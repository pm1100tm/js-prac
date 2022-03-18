import dayjs from "dayjs";

// dayjs 객체 생성 - 현재 날짜 및 시간 객체
const t = dayjs()

// 현재 시간 출력
let now = t.format()
console.log(now) // 2022-03-19T00:54:33+09:00

// dayjs 객체 생성 - 날짜 및 시간 지정 객체
let date = null
date = dayjs('2022-03-18').format()
console.log(date) // 2022-03-18T00:00:00+09:00

date = dayjs("2022.03.18", "YYYY-MM-DD").format()
console.log(date) // 2022-03-18T00:00:00+09:00

date = dayjs("03/18/22", "MM/DD/YY").format()
console.log(date) // 2021-10-10T00:00:00+09:00

date = dayjs("2022-03-18 12:12:12", "YYYY-MM-DD HH:mm:ss").format()
console.log(date) // 2021-10-10T10:30:25+09:00


// 포맷 지정 - format()
date = dayjs("2022-03-18 12:12:12", "YYYY-MM-DD HH:mm:ss");

console.log(date.format()) // 2022-03-18T12:12:12+09:00
console.log(date.format("YYYY-MM-DD")) // 22-03-18
console.log(date.format("yyyy-MM-DD")) // yyyy-03-18
console.log(date.format("DD/MM/YY")) // 18/03/22
console.log(date.format("YYYY.MM.DD HH:mm:ss")) // 2022.03.18 12:12:12
console.log(date.format("YYYY.MM.DD HH:mm")) // 2022.03.18 12:12


// 날짜 객체의 원하는 시간 단위 값 구하기 - get()
let year = t.get('year') // y 년
let month = t.get('month') // M 월
let dateValue = t.get('date') // D 일
let dayValue = t.get('day') // d 요일
let hour = t.get('hour') // h 시
let minute = t.get('minute') // m 분
let second = t.get('second') // s 초
let millisecond = t.get('millisecond') // ms

//  날짜 객체의 원하는 시간 단위 값 변경

