import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Loading from './Loading';
import Error from './Error';

function ArtCard(props) {
  if (props.loading || !props.piece) {
    return <Loading />;
  }
  if (props.error) {
    return <Error />;
  }
  return (
    <View>
      <TouchableOpacity
        onPress={()=>Linking.openURL(props.piece.url)}
      >
        <Image
          source={{ uri: props.piece.image }}
          style={{ height: 400, width: 300 }}
        />
        <Text>
          {props.piece.name} by {props.piece.artist}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const mapStateToProps = (state, props) => {
  return {
    piece: state.inspiration.art[props.number],
    loading: state.inspiration.loading,
    error: state.inspiration.error
  };
};
export default connect(mapStateToProps)(ArtCard);