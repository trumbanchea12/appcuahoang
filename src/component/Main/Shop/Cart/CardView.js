import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image
} from 'react-native';
import { connect } from 'react-redux';
import sp1 from '../../.././../media/temp/sp1.jpeg';
import { FlatList } from 'react-native-gesture-handler';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const url = 'http://vaomua.club/ungdung/images/product/';

class CartView extends Component {
    gotoDetail() {
        const { navigation } = this.props;
        navigation.push('ProductDetail');

    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }   
    
    showTotalAmount = (cart) => {
        var total = 0;
        if(cart.length > 0)
        {
            for(var i = 0; i < cart.length; i++)
            {   
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        
        return total;
    } 
    render() {
        var { cart } = this.props;

        const { navigation } = this.props;

        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        
        return (
            <View style={wrapper}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => 
                        <View style={product}>
                            <Image source={{ uri: `${url}${item.product.images[0]}` }} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{item.product.name}</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{item.product.price * item.quantity}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{item.quantity}</Text>
                                        <TouchableOpacity>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer}>
                                        <Text style={txtShowDetail} onPress={() => {
                                            navigation.navigate('ProductDetail', {
                                                product : item.product
                                            })
                                        } } >SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {this.showTotalAmount(cart)}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartView);

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',

    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'uppercase'

    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',

    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',

        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
