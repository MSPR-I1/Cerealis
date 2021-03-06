'use strict';

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroARSceneNavigator,
  ViroQuad,
} from '@viro-community/react-viro';

const ARScene = createReactClass({
  getInitialState() {
    return {
      texture: 'white',
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    };
  },
  render: function () {
    return (
      <ViroARScene>
        <ViroARImageMarker
          target={'rhino'}
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroNode
            scale={[0, 0, 0]}
            transformBehaviors={['billboardY']}
            animation={{name: this.state.animName, run: this.state.playAnim}}
          />
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./assets/tesla/object_car.obj')}
            resources={[require('./assets/tesla/object_car.mtl')]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            animation={{name: 'scaleCar', run: this.state.animateCar}}
          />

          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0, -1, 0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={0.7}
          />
          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5}
            height={2.5}
            arShadowReceiver={true}
          />
        </ViroARImageMarker>
        <ViroARImageMarker
          target={'singe'}
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroNode
            scale={[0, 0, 0]}
            transformBehaviors={['billboardY']}
            animation={{name: this.state.animName, run: this.state.playAnim}}
          />
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./assets/tesla/object_car.obj')}
            resources={[require('./assets/tesla/object_car.mtl')]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            animation={{name: 'scaleCar', run: this.state.animateCar}}
          />

          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0, -1, 0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={0.7}
          />

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5}
            height={2.5}
            arShadowReceiver={true}
          />
        </ViroARImageMarker>
        <ViroARImageMarker
          target={'tesla'}
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroNode
            scale={[0, 0, 0]}
            transformBehaviors={['billboardY']}
            animation={{name: this.state.animName, run: this.state.playAnim}}>
            <ViroSphere
              materials={['white_sphere']}
              heightSegmentCount={20}
              widthSegmentCount={20}
              radius={0.03}
              position={[-0.2, 0.25, 0]}
              onClick={this._selectWhite}
              animation={{
                name: 'tapAnimation',
                run: this.state.tapWhite,
                onFinish: this._animateFinished,
              }}
              shadowCastingBitMask={0}
            />
            <ViroSphere
              materials={['blue_sphere']}
              heightSegmentCount={20}
              widthSegmentCount={20}
              radius={0.03}
              position={[-0.1, 0.25, 0]}
              onClick={this._selectBlue}
              animation={{
                name: 'tapAnimation',
                run: this.state.tapBlue,
                onFinish: this._animateFinished,
              }}
              shadowCastingBitMask={0}
            />
            <ViroSphere
              materials={['grey_sphere']}
              heightSegmentCount={20}
              widthSegmentCount={20}
              radius={0.03}
              position={[0, 0.25, 0]}
              onClick={this._selectGrey}
              animation={{
                name: 'tapAnimation',
                run: this.state.tapGrey,
                onFinish: this._animateFinished,
              }}
              shadowCastingBitMask={0}
            />

            <ViroSphere
              materials={['red_sphere']}
              heightSegmentCount={20}
              widthSegmentCount={20}
              radius={0.03}
              position={[0.1, 0.25, 0]}
              onClick={this._selectRed}
              animation={{
                name: 'tapAnimation',
                run: this.state.tapRed,
                onFinish: this._animateFinished,
              }}
              shadowCastingBitMask={0}
            />

            <ViroSphere
              materials={['yellow_sphere']}
              heightSegmentCount={20}
              widthSegmentCount={20}
              radius={0.03}
              position={[0.2, 0.25, 0]}
              onClick={this._selectYellow}
              animation={{
                name: 'tapAnimation',
                run: this.state.tapYellow,
                onFinish: this._animateFinished,
              }}
              shadowCastingBitMask={0}
            />
          </ViroNode>
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./assets/tesla/object_car.obj')}
            resources={[require('./assets/tesla/object_car.mtl')]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            animation={{name: 'scaleCar', run: this.state.animateCar}}
          />

          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0, -1, 0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={0.7}
          />

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5}
            height={2.5}
            arShadowReceiver={true}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateCar: true,
    });
  },
  _toggleButtons() {
    this.setState({
      animName: this.state.animName === 'scaleUp' ? 'scaleDown' : 'scaleUp',
      playAnim: true,
    });
  },
  _selectWhite() {
    this.setState({
      texture: 'white',
      tapWhite: true,
    });
  },
  _selectBlue() {
    this.setState({
      texture: 'blue',
      tapBlue: true,
    });
  },
  _selectGrey() {
    this.setState({
      texture: 'grey',
      tapGrey: true,
    });
  },
  _selectRed() {
    this.setState({
      texture: 'red',
      tapRed: true,
    });
  },
  _selectYellow() {
    this.setState({
      texture: 'yellow',
      tapYellow: true,
    });
  },
  _animateFinished() {
    this.setState({
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    });
  },
});

var createReactClass = require('create-react-class');

ViroMaterials.createMaterials({
  white: {
    lightingModel: 'PBR',
    diffuseTexture: require('./assets/tesla/object_car_main_Base_Color.png'),
    metalnessTexture: require('./assets/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./assets/tesla/object_car_main_Roughness.png'),
  },
  blue: {
    lightingModel: 'PBR',
    diffuseTexture: require('./assets/tesla/object_car_main_Base_Color_blue.png'),
    metalnessTexture: require('./assets/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./assets/tesla/object_car_main_Roughness.png'),
  },
  grey: {
    lightingModel: 'PBR',
    diffuseTexture: require('./assets/tesla/object_car_main_Base_Color_grey.png'),
    metalnessTexture: require('./assets/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./assets/tesla/object_car_main_Roughness.png'),
  },
  red: {
    lightingModel: 'PBR',
    diffuseTexture: require('./assets/tesla/object_car_main_Base_Color_red.png'),
    metalnessTexture: require('./assets/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./assets/tesla/object_car_main_Roughness.png'),
  },
  yellow: {
    lightingModel: 'PBR',
    diffuseTexture: require('./assets/tesla/object_car_main_Base_Color_yellow.png'),
    metalnessTexture: require('./assets/tesla/object_car_main_Metallic.png'),
    roughnessTexture: require('./assets/tesla/object_car_main_Roughness.png'),
  },
  white_sphere: {
    lightingModel: 'PBR',
    diffuseColor: 'rgb(231,231,231)',
  },
  blue_sphere: {
    lightingModel: 'PBR',
    diffuseColor: 'rgb(19,42,143)',
  },
  grey_sphere: {
    lightingModel: 'PBR',
    diffuseColor: 'rgb(75,76,79)',
  },
  red_sphere: {
    lightingModel: 'PBR',
    diffuseColor: 'rgb(168,0,0)',
  },
  yellow_sphere: {
    lightingModel: 'PBR',
    diffuseColor: 'rgb(200,142,31)',
  },
});

ViroARTrackingTargets.createTargets({
  rhino: {
    source: require('./assets/rhino/rhino.png'),
    orientation: 'Up',
    physicalWidth: 0.165, // real world width in meters
  },
  singe: {
    source: require('./assets/singe/singe.png'),
    orientation: 'Up',
    physicalWidth: 0.165, // real world width in meters
  },
  tesla: {
    source: require('./assets/tesla/logo.png'),
    orientation: 'Up',
    physicalWidth: 0.165, // real world width in meters
  },
});

ViroAnimations.registerAnimations({
  scaleUp: {
    properties: {scaleX: 1, scaleY: 1, scaleZ: 1},
    duration: 500,
    easing: 'bounce',
  },
  scaleDown: {properties: {scaleX: 0, scaleY: 0, scaleZ: 0}, duration: 200},
  scaleCar: {
    properties: {scaleX: 0.09, scaleY: 0.09, scaleZ: 0.09},
    duration: 500,
    easing: 'bounce',
  },
  scaleSphereUp: {
    properties: {scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8},
    duration: 50,
    easing: 'easeineaseout',
  },
  scaleSphereDown: {
    properties: {scaleX: 1, scaleY: 1, scaleZ: 1},
    duration: 50,
    easing: 'easeineaseout',
  },
  tapAnimation: [['scaleSphereUp', 'scaleSphereDown']],
});

const ARCarDemo = createReactClass({
  render: function () {
    return (
      <View style={{flex: 1}}>
        <ViroARSceneNavigator
          initialScene={{scene: ARScene}}
          viroAppProps={{object: 'object'}}
          style={{flex: 1}}
        />
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./assets/logoApp/LogoInApp.png')}
          />
        </View>
      </View>
    );
  },
});

export default ARCarDemo;

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButton: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '20%',
    height: 100,
    marginLeft: 15,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 700,
  },
});
