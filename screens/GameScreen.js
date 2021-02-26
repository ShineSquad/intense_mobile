import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native';
import styles from '../constants/Styles';
import Items from '../constants/Items';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      points: 0,
      seconds: 0,
      modalVisible: false,
    };
  }

  componentDidMount () {
    this.start_game();
  }

  start_game = () => {
    this.setItems();
    this.timer();
    this.setState({
      points: 0,
      modalVisible: false,
    })
    var set_dilay = setInterval(() => {
      this.setItems();
    }, 3000)
  }

  end_game = () => {
    this.setState({
      modalVisible: true,
    })
  }

  timer = () => {
    let timer,
        x = 90,
        _this = this;
    countdown();
    function countdown(){
      _this.setState({
        seconds: x,
      })
      x--;
      if ( x < 0 ){
        clearTimeout(timer);
        _this.end_game();
      }
      else {
        timer = setTimeout(countdown, 1000);
      }
    }
  }

  setItems = () => {
    this.setNewActive();
    let option = [];
    for ( let i=0; i<9; i++ ) {
      let ukey = 'to_' + i;
      if (i == Items.activeItem) {
        option.push(
          <TouchableOpacity key={ukey} onPress={this.hit} style={[styles.inactive, styles.active]}><Text style={{fontSize: 30}}>🐵</Text></TouchableOpacity>
        )
      } else {
        option.push(
          <TouchableOpacity key={ukey} onPress={this.miss} style={styles.inactive}><Text></Text></TouchableOpacity>
        )
      }
    }
    this.setState({
      options: option
    })
  }

  exit = () => {
    this.setState({
      modalVisible: false
    })
    this.props.navigation.navigate('Home');
  }

  hit = () => {
    let point = this.state.points + 10;
    this.setState({ points: point })
    this.setItems();
  }

  miss = () => {
    let point = this.state.points - 5;
    this.setState({ points: point })
    this.setItems();
  }

  setNewActive = () => {
    let active = parseInt(Math.random()*9);
    Items.activeItem = active;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Счет: {this.state.points}</Text>
        <Text style={styles.header_text}>Осталось: {this.state.seconds}</Text>
        </View>
        <View style={styles.alignment}>
          {this.state.options}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.align}>
                <Text style={styles.modalText}>Поздравляю!</Text>
                <Text style={styles.modalText}>Вы набрали {this.state.points} баллов</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.start_game() }
              >
                <Text>Начать игру заново</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
