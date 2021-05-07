import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    render() {
        return (
        <div>
            <h2>SongList</h2>
            {this.props.songs.map(song => (
    <div className='item' key={song.title}>
        <div className='left'>{song.title}</div>
        <div className='right'>
            <button 
            onClick={() => this.props.selectSong(song)}
            className='primary' >Select</button>
        </div>
        </div>
            ))}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);