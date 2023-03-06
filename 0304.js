// 在index.js文件实现函数
function translateArrayToTree(list) {

}
// 将下面数据
let source =
    [
        { name: "男士奢侈品T恤", parentId: "agicy4zcr9c0", id: "agid00hlgpvk", weight: 10, },
        { name: "男士奢侈品", parentId: "agicwn8nwg00", id: "agicy4zcr9c0", weight: 7, },
        { name: "奢侈品", parentId: "ROOT", id: "agicwn8nwg00", weight: 4 },
        { name: "男士卡通T恤", parentId: "agic2j6la77k", id: "agic44o9nh8g", weight: 2, },
        { name: "男士T恤", parentId: "agic1fc13lds", id: "agic2j6la77k", weight: 1 },
        { name: "T恤", parentId: "ROOT", id: "agic1fc13lds", weight: 11 },
        { name: "女士系列", parentId: "aetri28cdt44", id: "af42gq1xe0ow", weight: 15, },
        { name: "x c v c v", parentId: "ROOT", id: "aetri28cdt44", weight: 0 },
    ]
// 转换成
let traget = [
    {
        name: "ROOT",
        id: "ROOT",
        children: [
            {
                name: "x c v c v",
                id: "aetri28cdt44",
                children: [{ name: "女士系列", id: "af42gq1xe0ow", children: [] }],
            },
            {
                name: "奢侈品",
                id: "agicwn8nwg00",
                children: [{
                    name: "男士奢侈品", id: "agicy4zcr9c0",
                    children: [{ name: "男士奢侈品T恤", id: "agid00hlgpvk", children: [] }],
                }],
            },
            {
            name: "T恤",
            id: "agic1fc13lds",
            children: [
                {
                    name: "男士T恤", id: "agic2j6la77k",
                    children: [ { name: "男士卡通T恤", id: "agic44o9nh8g", children: [] }],
                }
            ],
        }],
    }
];