import React from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TodoList() {
    const navigation = useNaviation();
    const [todos, setTodos] = useState(
        [
            { _id: '1', completed: false, title: "exercise @ 7.00" },
            { _id: '2', completed: false, title: "meeting @ 9.00" },
            { _id: '3', completed: false, title: "go to cinema @ 19.00" },
        ]
    );
    const onCreate = () => {
        let new_data = {
            _id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY
        let t = [...todos];
        //APPEND NEW DATA INTO ARRAY
        t.push(new_data);     
        //UPDATE STATE
        setTodos(t);               
    };     
    const onUpdate = (new_title, _id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item._id == _id));
        //Update object's name property.
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);
    }; 
    const onCheck = (_id) => {
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = ! t[index].completed;
        setTodos(t);
    };   
    const onDelete = (_id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        t.splice(index, 1);
        setTodos(t);        
    };  


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <TodoItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity>

        </View>
    );
}
