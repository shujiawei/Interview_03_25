const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sell_shop'
});
connection.connect();
var sqlstring = "";
// 创建表
sqlstring = 'Create Table goods_table (id INT(20), goods_id CHAR(32), goods_name CHAR(16),goods_new_price CHAR(16), goods_old_price CHAR(16), is_hot CHAR(16), is_new CHAR(16), goods_imgs CHAR(16), stock CHAR(16), sale_num CHAR(16), goods_detail CHAR(16), specifications CHAR(16), shop_name CHAR(16), update_time CHAR(16))'
// sqlstring = 'Create Table shopping_table (id INT(20), goods_name CHAR(32), specifications CHAR(16),num CHAR(16),goods_price CHAR(16))'
connection.query(sqlstring, function (err, results, fields) {
    if (err) {
         console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------CREATE----------------------------');       
    console.log('CREATE TABLE:', results);        
    console.log('------------------------------------------------------------\n\n');  
});