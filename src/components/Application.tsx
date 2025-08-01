import { useState, useEffect } from 'react';
import GradeSelector from '../components/GradeSelector';
import RouletteArea from '../components/RouletteArea';
import ResultPopup from '../components/ResultPopup';
import Modal from "../components/Modal";
import LogList from '../components/LogList';
import ExclusionControl from '../components/ExclusionControl';
import { CircleArrowOutUpLeft } from 'lucide-react';

type Person = { name: string; grade: string };

const Application = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [selectedGrade, setSelectedGrade] = useState<string>('');
    const [history, setHistory] = useState<Person[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [winner, setWinner] = useState<Person | null>(null);
    const [excludedNames, setExcludedNames] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/data.csv')
        .then(res => res.text())
        .then(text => {
            const lines = text.trim().split('\n');
            const parsed: Person[] = lines.map(line => {
                const [name, grade] = line.split(',');
                return { name: name.trim(), grade: grade.trim() };
            });
            setPeople(parsed);
            const uniqueGrades = Array.from(new Set(parsed.map(p => p.grade)));
            if (uniqueGrades.length > 0) {
                setSelectedGrade(uniqueGrades[0]);
            }
        });
    }, []);

    const grades = Array.from(new Set(people.map(p => p.grade)));
    const filteredPeople = selectedGrade
        ? people.filter(p => p.grade === selectedGrade && !excludedNames.includes(p.name))
        : [];

    const handleResult = (name: string) => {
        const person = people.find(p => p.name === name);
        if (person) {
            setWinner(person);
            setHistory(prev => [...prev, person]);
            setShowPopup(true);
        }
    };

    const toggleExclude = (name: string) => {
        setExcludedNames(prev =>
            prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
        );
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setWinner(null);
    };

    return (
        <div>
            <h1><CircleArrowOutUpLeft  size={32} strokeWidth={3} /> Roulette</h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <GradeSelector
                    grades={grades}
                    selectedGrade={selectedGrade}
                    onSelect={setSelectedGrade}
                />
                <button onClick={() => setIsModalOpen(true)}>Exclusion settings</button>
            </div>

            <RouletteArea
                candidates={filteredPeople}
                onResult={handleResult}
            />

            <LogList
                history={history}
                onReset={() => setHistory([])}
            />

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <ExclusionControl
                        candidates={people.filter(p => p.grade === selectedGrade)}
                        excludedNames={excludedNames}
                        onToggle={toggleExclude}
                    />
                </Modal>
            )}

            {showPopup && winner && (
                <ResultPopup
                    name={winner.name}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

export default Application;
