/**
 * created by wjy on 2019/2/21
 * description:app入口
 */

import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HeaderTab from './headerTab'

export default class RootPage extends React.Component {
    render() {
        console.log('render RootPage')
        return (
            <View>
                <Text>hello RootPage</Text>
                <HeaderTab />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});