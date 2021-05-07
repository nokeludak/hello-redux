import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App = () => {
    return (
    <div>
        <div className='left'>
        <SongList />
        </div>
        <div className='right panel'>
            <SongDetail />
        </div>
        </div>
    );
        
}

export default App;