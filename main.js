// 再宣言
let fruit = "みかん";
// let fruit = "みかん";

// 再代入
const drink = "tea";
// drink = "lemontea";

// スコープ
const globalscope = 'グローバルスコープ';

// 関数スコープの例
function sample01(){
  let localscope = '関数スコープ';
  console.log(localscope);
}

// ブロックスコープの例
function sample02(){

  for(let i = 0; i < 3; i++){
    console.log(i);
  }
// 以下はエラーになります
  console.log(i);
}
sample02(0);
