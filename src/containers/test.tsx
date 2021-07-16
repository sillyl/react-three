import React from 'react';
import {observable} from 'mobx'
import * as THREE from 'three';
import './index.less';

interface Props {
    prefixCls?:string;
}
class Test extends React.Component<Props,{}>{
    static defaultProps = {
        prefixCls:'test-three'
    };
   @observable scene: any = null;
   @observable group: any = null;
   @observable camera: any = null;
   @observable geometry: any= null;
   @observable meterial: any= null;
   @observable cube: any= null;
   @observable renderer: any= null;

    componentDidMount():void{
        this.initTree();
        this.animate();
    }
    render():React.ReactElement{
        const {prefixCls} = this.props;
        return (
            <div className={`${prefixCls}`} style={{width:'100%',height:'100vh'}}>
                test
            </div>
        )
    }

    initTree=()=>{
        let cantainer = document.querySelector('.test-three');
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x515151);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        // 创建 camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,1,2000);
        this.camera.position.x = -10;
        this.camera.position.y = 15;
        this.camera.position.z = 500;
        // 创建要旋转的立方体
        this.geometry = new THREE.BoxGeometry(100,100,100);
        this.meterial = new THREE.MeshBasicMaterial({color:0xffffff});
        this.cube = new THREE.Mesh(this.geometry, this.meterial);
        this.group.add(this.cube);
        // 创建渲染器
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xffffff);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth,window.innerHeight) //渲染器尺寸大小
        cantainer?.appendChild(this.renderer.domElement);
       //
    }
    animate=()=>{
        requestAnimationFrame(this.animate);
        this.group.rotation.x += 0.01;
        this.group.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }

}

export default Test;