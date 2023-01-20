import axios from 'axios'

const state = {
    tasks: [
        {
            id: 1,
            title: "Doctor Appointment",
            description: "My tooth hurts so much",
            day: "March 1st at 2:30 PM",
            reminder: true
          },
          {
            id: 2,
            title: "Feed The Dog",
            description: "My dog pucci is hungry",
            day: "February 2nd at 9:00 AM",
            reminder: true
          },
          {
            id: 3,
            title: "Do Some School Homeworks",
            description: "I hate school",
            day: "July 11th at 8:00 PM",
            reminder: false
          },
          {
            id: 4,
            title: "Fuck A Girl",
            description: "Description 4",
            day: "Everyday",
            reminder: true
          }
    ]
}

const getters = {
    allTasks: (state) => state.tasks
}

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks)
} 

export default {
    state,
    getters,
    mutations    
}