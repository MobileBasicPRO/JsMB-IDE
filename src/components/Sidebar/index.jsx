import React, { Component } from 'react';

import PlusBtn from './PlusBtn';

import "./Sidebar.min.css";
import "./Icons.css";

class File extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.handleClick = this.handleClick.bind(this);
    // }

    handleClick(e) {
        console.log(`You was click ${this.props.file.name}`);
    }

    render() {
        let filename = this.props.file.name;
        return <file icon={filename.split(".").pop()} onClick={this.handleClick}>{filename}</file>
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.handleAddFile = this.handleAddFile.bind(this);
        this.state = {
            files: [{
                name: "Autorun.bas",
            }]
        };
    }

    handleClick(filename) {
        if (!filename) return;
        console.log(this.state);
        const {files} = this.state;
		this.setState({
			files: files.concat({
                //FIXME: this.state.files = undefined
				name: filename
			})
		});
    }

    render() {
        return (
            <aside>
                <header>Файлы проекта:
                    <PlusBtn
                        handleClick={this.handleClick}
                    />
                </header>
                {this.state.files.map(file => <File file={file} key={file.name} />)}
            </aside>
        );
    }
}

export default Sidebar;