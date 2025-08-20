const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://foodie:mern123@cluster0.btnow.mongodb.net/foodie?retryWrites=true&w=majority&appName=Cluster0' );
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection('food_items').find({}).toArray();
        global.food_items = fetched_data;

        await mongoose.connect('mongodb+srv://foodie:mern123@cluster0.btnow.mongodb.net/foodie?retryWrites=true&w=majority&appName=Cluster0' );
        const food_Category = await mongoose.connection.db.collection('foodcategory').find({}).toArray();
        global.foodcategory = food_Category;
        
        //console.log(food_items);
        // the following code snippet was accessing mongoose connection right after mongoose.
        //connect that was resulting in the code moving forward without waiting fr the connection
        // to be established properly 
       
        /* fetched_data.find({}).toArray(function (err, data) {
            if (err) console.log(err);
            else console.log(data);
        })*/

    } catch (err) {
        console.error('Connection error', err);
    }
};

module.exports = mongoDB;

// the following code is for an older version of mongoose where mongoose.connect used to accept call back funtions but it does't anymore 
/*const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://foodie:mern123@cluster0.btnow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB= async()=>{
    await mongoose.connect(mongoURI,()=>{
        console.log("connected");
    
    });
}

module.exports=mongoDB;*/

