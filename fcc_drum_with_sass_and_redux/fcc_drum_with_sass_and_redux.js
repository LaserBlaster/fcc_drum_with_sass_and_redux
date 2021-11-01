let muteClass = "fas fa-volume-mute muted"; 
let volumeOnClass = "fas fa-volume-up on";
let qValueArr = ["Q Drum", "Q Piano", "Q Flute"];
let qLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", "#"];
let wValueArr = ["W Drum", "W Piano", "W Flute"];
let wLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", "#"];
let eValueArr = ["E Drum", "E Piano", "E Flute"];
let eLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", "#"];
let aValueArr = ["A Drum", "A Piano", "A Flute"];
let aLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", "#"];
let sValueArr = ["S Drum", "S Piano", "S Flute"];
let sLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", "#"];
let dValueArr = ["D Drum", "D Piano", "D Flute"];
let dLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", "#"];
let zValueArr = ["Z Drum", "Z Piano", "Z Flute"];
let zLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", "#"];
let xValueArr = ["X Drum", "X Piano", "X Flute"];
let xLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", "#"];
let cValueArr = ["C Drum", "C Piano", "Z Flute"];
let cLinkArr = ["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", "#"];
let instrumentArr = ["Drums", "Piano", "Flute"];


let play = function(){document.getElementById("audio").play()};


class DrumMachine extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            power: true,
            instrument: instrumentArr[0],
            bank: 0,
            volumeLevel: 0.5, 
            volumeDisplay: 50,
            chord: "",
            displayValue: "",

            qValue: qValueArr[0], 
            qLink: qLinkArr[0],
            wValue: wValueArr[0], 
            wLink: wLinkArr[0],
            eValue: eValueArr[0], 
            eLink: eLinkArr[0],

            aValue: aValueArr[0], 
            aLink: aLinkArr[0],
            sValue: sValueArr[0], 
            sLink: sLinkArr[0],
            dValue: dValueArr[0], 
            dLink: dLinkArr[0],

            zValue: zValueArr[0], 
            zLink: zLinkArr[0],
            xValue: xValueArr[0], 
            xLink: xLinkArr[0],
            cValue: cValueArr[0], 
            cLink: cLinkArr[0],

            powerClass: volumeOnClass,

        

            bigGrid: "",
            bigGridItem1: "",
            bigGridItem2: "",
            drumBody: "",
            color: "blue"
        
        }
        this.padClick = this.padClick.bind(this);
        //this.keyClick = this.keyClick.bind(this);
        this.keyPressFunction = this.keyPressFunction.bind(this);
        this.testFunction = this.testFunction.bind(this);
        this.muteFunction = this.muteFunction.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.setInstrument = this.setInstrument.bind(this);
        this.windowResizeFunction = this.windowResizeFunction.bind(this);

    }
    //Adding event listeners withcomponentDidMount
    componentDidMount() {
        // When the component is mounted, add your DOM listener to the "nv" elem.
        // (The "nv" elem is assigned in the render function.)
        document.getElementById(this.state.qValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.wValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.eValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.aValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.sValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.dValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.zValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.xValue).addEventListener("click", this.padClick);
        document.getElementById(this.state.cValue).addEventListener("click", this.padClick);
        //document.getElementById("powerButton").addEventListener("click", this.muteFunction );
        
        document.getElementById("powerSection").addEventListener("click", this.muteFunction );
        
        window.addEventListener("keydown", this.keyPressFunction);
        window.addEventListener('resize', this.windowResizeFunction);
        this.windowResizeFunction();
    }
    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        //this.nv.removeEventListener("nv-enter", this.handleNvEnter);
        document.getElementById(this.state.qValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.wValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.eValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.aValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.sValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.dValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.zValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.xValue).removeEventListener("click", this.padClick);
        document.getElementById(this.state.cValue).removeEventListener("click", this.padClick);
        window.removeEventListener("keydown", this.keyPressFunction);
        window.removeEventListener("resize", this.windowResizeFunction);
        
        
    }
    windowResizeFunction(event) {
        //alert(window.innerWidth)
        if(window.innerWidth >= 1100){
            this.setState((state, props) => ({
                bigGrid: "bigGridBigScreen",
                bigGridItem1: "bigGridItem1BigScreen",
                bigGridItem2: "bigGridItem2BigScreen",
                drumBody: "drumBodyBigScreen"
            }));
        } else {
            this.setState((state, props) => ({
                bigGrid: "bigGridSmallScreen",
                bigGridItem1: "bigGridItem1SmallScreen",
                bigGridItem2: "bigGridItem2SmallScreen",
                drumBody: "drumBodySmallScreen"
            }));
        }          
    }
    muteFunction (event) {
        let qElement = document.getElementById(this.state.qValue);
        let wElement = document.getElementById(this.state.wValue);
        let eElement = document.getElementById(this.state.eValue);
        let aElement = document.getElementById(this.state.aValue);
        let sElement = document.getElementById(this.state.sValue);
        let dElement = document.getElementById(this.state.dValue);
        let zElement = document.getElementById(this.state.zValue);
        let xElement = document.getElementById(this.state.xValue);
        let cElement = document.getElementById(this.state.cValue);
        if(this.state.power){
            this.setState((state, props) =>({
                power: false,
                powerClass: muteClass,
                displayValue: "MUTED",
                color: "red"
            }));
        } else {
            
            this.setState((state, props) =>({
                power: true,
                powerClass: volumeOnClass,
                displayValue: "",
                color: "blue"
            }));
        }

    }
    setVolume (event){
        this.setState((state, props) => ({
            volumeLevel: event.target.value / 100,
            volumeDisplay: event.target.value
        }))
    }
    testFunction (event){
        alert(this.state.eValue)
    }          
    padClick (event) {
        let padClickVolume = this.state.volumeLevel;
        if(!this.state.power) {
            padClickVolume = 0.0;
        }
        switch (event.target.id) {
            case (this.state.qValue):
            let qPadAudio = document.getElementById("Q");
                qPadAudio.volume = padClickVolume;
                qPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.qValue
                }))
                break;
            case (this.state.wValue):
                let wPadAudio = document.getElementById("W");
                wPadAudio.volume = padClickVolume;
                wPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.wValue
                }))
                break;
            case (this.state.eValue):  
                let ePadAudio = document.getElementById("E");
                ePadAudio.volume = padClickVolume;
                ePadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.eValue
                }))
                break;
            case (this.state.aValue):
                let aPadAudio = document.getElementById("A");
                aPadAudio.volume = padClickVolume;
                aPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.aValue
                }))
                break;
            case (this.state.sValue):
                let sPadAudio = document.getElementById("S");
                sPadAudio.volume = padClickVolume;
                sPadAudio.play();  
                this.setState((state, props) => ({
                    displayValue: state.sValue
                }))
                break;
            case (this.state.dValue):
                let dPadAudio = document.getElementById("D");
                dPadAudio.volume = padClickVolume;
                dPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.dValue
                }))
                break;
            case (this.state.zValue):
                let zPadAudio = document.getElementById("Z");
                zPadAudio.volume = padClickVolume;
                zPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.zValue
                }))
                break;
            case (this.state.xValue):
                let xPadAudio = document.getElementById("X");
                xPadAudio.volume = padClickVolume;
                xPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.xValue
                }))
                break;
            case (this.state.cValue):
                let cPadAudio = document.getElementById("C");
                cPadAudio.volume = padClickVolume;
                cPadAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.cValue
                }))
                break;
        }
    }
    keyPressFunction (event) {
        let keyClickVolume = this.state.volumeLevel;
        if(!this.state.power) {
            keyClickVolume = 0.0;
        }
        switch (event.keyCode){
            case (81):
                let qAudio = document.getElementById("Q");
                qAudio.volume = keyClickVolume;
                qAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.qValue
                }))
                break;
            case (87):    
                let wAudio = document.getElementById("W");
                wAudio.volume = keyClickVolume;
                wAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.wValue
                }))
                break;
            case (69):
                let eAudio = document.getElementById("E");
                eAudio.volume = keyClickVolume;
                eAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.eValue
                }))
                break;
            case (65):
                let aAudio = document.getElementById("A");
                aAudio.volume = keyClickVolume;
                aAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.aValue
                }))
                break;
            case (83):
                let sAudio = document.getElementById("S");
                sAudio.volume = keyClickVolume;
                sAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.sValue
                }))
                break;
            case (68):
                let dAudio = document.getElementById("D");
                dAudio.volume = keyClickVolume;
                dAudio.play();                       
                this.setState((state, props) => ({
                    displayValue: state.dValue
                }))
                break;
            case (90):
                let zAudio = document.getElementById("Z");
                zAudio.volume = keyClickVolume;
                zAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.zValue
                }))
                break;
            case (88):
                let xAudio = document.getElementById("X");
                xAudio.volume = keyClickVolume;
                xAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.xValue
                }))
                break;
            case (67):
                let cAudio = document.getElementById("C");
                cAudio.volume = keyClickVolume;
                cAudio.play();
                this.setState((state, props) => ({
                    displayValue: state.cValue
                }))
                break;
        }
        
    }
    
    setInstrument (event) {
        let instrumentIndex = 0;
        switch(event.target.id){
            case("drums"):
                instrumentIndex = 0;
                break;
            case("piano"):
                instrumentIndex = 1;
                break;
            case("flute"):
                instrumentIndex = 2;
                break;
        }
        this.setState((state,props) =>({
            instrument: instrumentArr[instrumentIndex],
            qValue: qValueArr[instrumentIndex],
            qLink: qLinkArr[instrumentIndex],
            wValue: wValueArr[instrumentIndex], 
            wLink: wLinkArr[instrumentIndex],
            eValue: eValueArr[instrumentIndex], 
            eLink: eLinkArr[instrumentIndex],

            aValue: aValueArr[instrumentIndex], 
            aLink: aLinkArr[instrumentIndex],
            sValue: sValueArr[instrumentIndex], 
            sLink: sLinkArr[instrumentIndex],
            dValue: dValueArr[instrumentIndex], 
            dLink: dLinkArr[instrumentIndex],

            zValue: zValueArr[instrumentIndex], 
            zLink: zLinkArr[instrumentIndex],
            xValue: xValueArr[instrumentIndex], 
            xLink: xLinkArr[instrumentIndex],
            cValue: cValueArr[instrumentIndex], 
            cLink: cLinkArr[instrumentIndex],

        }));
    }
    
    render() {

        return (
            
            <div id="drum-machine" className={this.state.drumBody} /*class="container" style={this.state.mainContainer}*/ > 
                <div class={this.state.bigGrid}>
                    <div class={this.state.bigGridItem1}>
                        <div id="buttons" class="grid-container" >
                            <div class="item1 drum-pad" id={this.state.qValue} >
                                <audio class="clip" id="Q" src={this.state.qLink}></audio>
                                Q
                            </div>
                            <div class="item2 drum-pad" id={this.state.wValue}>
                                <audio class="clip" id="W" src={this.state.wLink}></audio>  
                                W                            
                            </div>
                            <div class="item3 drum-pad" id={this.state.eValue}>
                                <audio class="clip" id="E" src={this.state.eLink}></audio>        
                                E                      
                            </div>
                            <div class="item4 drum-pad" id={this.state.aValue}>
                                <audio class="clip" id="A" src={this.state.aLink}></audio>    
                                A                         
                            </div>
                            <div class="item5 drum-pad" id={this.state.sValue}>
                                <audio class="clip" id="S" src={this.state.sLink}></audio>       
                                S                       
                            </div>
                            <div class="item6 drum-pad" id={this.state.dValue}>
                                <audio class="clip" id="D" src={this.state.dLink}></audio>         
                                D                      
                            </div>
                            <div class="item7 drum-pad" id={this.state.zValue}>
                                <audio class="clip" id="Z" src={this.state.zLink}></audio>   
                                Z                           
                            </div>
                            <div class="item8 drum-pad" id={this.state.xValue}>
                                <audio class="clip" id="X" src={this.state.xLink}></audio>          
                                X                    
                            </div>
                            <div class="item9 drum-pad" id={this.state.cValue}>
                                <audio class="clip" id="C" src={this.state.cLink}></audio>          
                                C                   
                            </div>
                        </div>
                    </div>
                    <div class={this.state.bigGridItem2}>
                        <div id="controls" class="grid-container2">   
                            <div id="powerSection" class="grid2-item1" style={{backgroundColor: this.state.color}}>
                                <h2 id="powerLabel" style={{backgroundColor: this.state.color}}>Power</h2>
                                <div id="powerButton" class={this.state.powerClass} />                                       
                            </div>
                            <div class="grid2-item2">
                                <div id="display">{this.state.displayValue}</div>
                            </div>
                                <div class="grid2-item3">
                                <div id="volumeMeter">Volume:&nbsp;{this.state.volumeDisplay}</div>
                            </div>
                            <div class="grid2-item4">
                                <input id="volumeControl" type="range" min="0" max="100" step="1" onInput={this.setVolume} onChange={this.setVolume}></input>
                            </div>
                            <div class="grid2-item5">
                                <div id="currentInstrument" class="grid2-item2">{this.state.instrument}</div>
                            </div>
                            <div class="grid2-item6">
                                <div class="container" >
                                    <div class="row" >
                                        <div class="col-lg-12" >
                                            <div class="btn-group" >
                                                <button id="instrumentDropdownMenu" type="button" class="btn btn-default dropdown-toggle border-0" data-toggle="dropdown" style={{fontSize: "1.2em"}}/*style={{width: "10em", marginLeft: "-1em" }} */>Scrollable Menu <span class="caret"></span></button>
                                                <ul class="dropdown-menu scrollable-menu" role="menu" style={{width: "12em",height: "7em", overflowY: "scroll", backgroundColor: "black", marginTop: "-0.1em"}}>
                                                    <li><a class="dropdown-item" id="drums" onClick={this.setInstrument}>Drums</a></li>
                                                    <li><a class="dropdown-item" id="piano" onClick={this.setInstrument}>Piano</a></li>
                                                    <li><a class="dropdown-item" id="flute" onClick={this.setInstrument}>Flute</a></li>
                                                    {/* code below is a placeholder*/}
                                                    <li><a class="dropdown-item" id="drums" onClick={this.setInstrument}>Drums</a></li>
                                                    <li><a class="dropdown-item" id="piano" onClick={this.setInstrument}>Piano</a></li>
                                                    <li><a class="dropdown-item" id="flute" onClick={this.setInstrument}>Flute</a></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                                  
                        </div>                          
                    </div>
                </div>

            </div>
            
        );

    }

}

ReactDOM.render(<DrumMachine />, document.getElementById('drumMachineBody'))