import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
//import { TfImageRecognition } from 'react-native-tensorflow';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const { width , height} = Dimensions.get('window');
let ImagePicker = require('react-native-image-picker');

export default class Home extends Component{

    constructor() {
        super();
        //this.image = require('../../assets/redfox.jpeg');
        this.takePicture = this.takePicture.bind(this);
        this.openLibrary = this.openLibrary.bind(this);
        this.somethingElse = this.somethingElse.bind(this);
        this.state = {
            avatarSource: require('../../assets/redfox.jpeg'),
            result: 'hhh',
        };
    }

    // componentDidMount() {
    //     this.recognizeImage()
    // }

    // async recognizeImage() {
    //
    //     try {
    //         const tfImageRecognition = new TfImageRecognition({
    //             model:require('../../assets/tensorflow_inception_graph.pb'),
    //             labels: require('../../assets/tensorflow_labels.txt'),
    //             imageMean: 100,
    //         });
    //
    //         const results = await tfImageRecognition.recognize({
    //             image: this.image
    //         });
    //
    //         results.forEach(result =>
    //             console.log(
    //                 result.id,
    //                 result.name,
    //                 result.confidence,
    //             ));
    //
    //         const resultText = `1: ${results[0].name}\n${results[0].confidence}\n\n2: ${results[1].name}\n${results[1].confidence}\n\n3: ${results[2].name}\n${results[2].confidence}`
    //         this.setState({result: resultText});
    //         await tfImageRecognition.close()
    //     } catch(err) {
    //         alert(err)
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigateBox}>
                    <Text>navigation</Text>
                </View>

                <View style={styles.imageBox} >
                    <ImageBackground source={this.state.avatarSource} style={styles.image}/>
                </View>

                <View style={styles.resultBox}>
                    <Text style={styles.result}>
                        {this.state.result}
                    </Text>
                </View>

                <View style={styles.shootBox}>
                    <TouchableOpacity onPress={this.openLibrary}>
                        <MaterialIcons name='photo-library' size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture}>
                        <FontAwesome name='circle-o' size={80}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.somethingElse}>
                        <MaterialIcons name='file-upload' size={40}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture(){
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
            let source = { uri: response.uri };
            this.setState({
                avatarSource: source,
            })
        })
    }

    openLibrary(){
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            let source = { uri: response.uri };
            this.setState({
                avatarSource: source,
            })
        })
    }

    somethingElse(){
        alert('something else')
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
    },
    navigateBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:height-width-200,
        backgroundColor:'forestgreen',
    },
    resultBox:{
        position:'absolute',
        marginTop:200,
        backgroundColor:'green'
    },
    result: {
        fontSize:16,
        padding:5,
        textAlign: 'center',
        color: '#333333',
    },
    imageBox:{
        width:width,
        height:width,
        backgroundColor:'yellow',
    },
    image: {
        flex:1,
    },
    shootBox:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:200,
        width:width,
        backgroundColor:'forestgreen',
    },
    shootBtn:{
        width:50,
        height:50,
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
});
