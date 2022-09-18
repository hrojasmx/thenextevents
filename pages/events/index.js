import { useRouter } from 'next/router';

import EventsSearch from '../../components/events/events-search';
import EventList from '../../components/events/event-list';

import { getAllEvents } from '../../dummy-data';


function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <div>
            {/*<EventsSearch />*/}
            <EventsSearch onSearch={findEventsHandler} />

            <EventList items={events} />
        </div>
    );
}

export default AllEventsPage;
