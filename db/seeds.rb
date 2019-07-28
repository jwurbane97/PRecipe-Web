# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Message.create([
        {title: "1단계: 틀에 반죽 넣기(pour)", content: "반죽을 넣기 전에 틀이 비어있는지 확인해야합니다. 틀이 비어있으면 반죽을 넣고, 틀이 비어있지 않다면 반죽을 넣지 않습니다. isEmpty 변수에 틀이 비어있는지 유무를 저장하고 틀에 반죽을 붓는 문구를 출력하세요.", positive: "축하합니다! 틀에 반죽 붓기를 성공했습니다. 이제 틀에 반죽을 넣을 수 있습니다.", negative: "틀렸습니다. 다시 한번 해보세요. isEmpty값을 확인하셨나요?"},
        {title: "2단계: 앙금 넣기(add)", content: "앙금 넣기 앙금은 redbean, cream이 있습니다. ingredient 변수에 원하는 앙금을 저장합니다. ingredient에 따라 추가되는 앙금이 달라집니다. 앙금 종류에 따른 적합한 문구를 출력하세요.", positive: "축하합니다! 앙금 넣기를 성공했습니다. 이제 다양한 앙금을 넣을 수 있습니다.", negative: "틀렸습니다. 다시 한번 해보세요. ingredient에 앙금을 제대로 저장했나요?"},
        {title: "3단계: 틀 뒤집기(takeover)", content: "틀을 뒤집기 전에 이미 뒤집었는지 확인해야합니다. 만약 틀이 뒤집혀 있으면 뒤집지 않고 틀이 안 뒤집혀 있으면 틀을 뒤집습니다. isTurnOver 변수에 뒤집었는지 유무를 저장하고 틀을 뒤집는 문구를 출력하세요.", positive: "축하합니다! 뒤집기를 성공했습니다. 이제 뒤집기가 가능합니다.", negative: "틀렸습니다. 다시 한번 해보세요. isTurnOver 값을 확인하셨나요?"},
        {title: "4단계: 꺼내기(takeout)", content: "틀에서 붕어빵 빼기 먼저 틀이 비어있는지 확인해야합니다. 틀이 비어있지 않다면 빵을 꺼냅니다. isEmtpy 변수에 틀이 비어있는지 아닌지 유무를 저장하고 빵을 꺼내는 문구를 출력하세요.", positive: "축하합니다! 붕어빵 꺼내기에 성공했습니다. 이제 다 구워진 붕어빵을 꺼낼 수 있습니다.", negative: "틀렸습니다. 다시 한번 해보세요. isEmpty 값을 확인하셨나요?"},
        {title: "5단계: 붕어빵 상태 확인하기(result)", content: "붕어빵이 구워진 상태를 나타내는 state 변수가 있습니다. state는 ripe, burnt, unbaked가 있으며 state가 ripe일 경우, burnt일 경우, unbaked일 경우에따라 적합한 문구를 출력하세요.", positive: "축하합니다! 구워진 붕어빵 상태 확인을 성공했습니다. 이제 어떠한 붕어 빵이 구워졌는지 확인 할 수 있습니다.", negative: "틀렸습니다. 다시 한번 해보세요. state 값을 확인하셨나요?"}
    ])

User.create([
    {email: "jwurbane97@ajou.ac.kr", password: "precipe_18"},
    {email: "mjna231@gmail.com", password: "skalswl"}
])