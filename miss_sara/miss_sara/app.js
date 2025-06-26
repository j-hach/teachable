// TeachTrack App - JavaScript Implementation
class TeachTrackApp {
    constructor() {
        this.students = [];
        this.programTemplates = [];
        this.payments = [];
        this.completedLessons = [];
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.selectedDate = null;
        this.currentStudentId = null;
        
        this.init();
    }

    init() {
        this.loadSampleData();
        this.setupEventListeners();
        this.renderDashboard();
        this.renderStudents();
        this.renderCalendar();
        this.renderSettings();
        this.updateDashboardStats();
    }

    loadSampleData() {
        // Load sample data from the provided JSON
        this.students = [
            {
                id: "1",
                name: "Joseph Jo",
                contactInfo: "+852 1231-4567",
                emergencyContact: "Joseph Mom, +1 (555) 987-6543",
                notes: "Prefers afternoon sessions",
                program: {
                    id: "p1",
                    name: "4-Lesson Mathematics Plan",
                    totalLessons: 4,
                    completedLessons: 2,
                    price: 800.00,
                    paymentStatus: true
                },
                lessonDates: [
                    "2025-06-10T15:00:00",
                    "2025-06-17T15:00:00",
                    "2025-06-24T15:00:00",
                    "2025-07-01T15:00:00"
                ]
            },
            {
                id: "2",
                name: "Handel Hand",
                contactInfo: "+1 (555) 234-5678",
                emergencyContact: "Sara Sa, +1 (555) 876-5432",
                notes: "Has difficulty with algebraic concepts",
                program: {
                    id: "p2",
                    name: "8-Lesson Science Program",
                    totalLessons: 8,
                    completedLessons: 3,
                    price: 1200.00,
                    paymentStatus: false
                },
                lessonDates: [
                    "2025-06-11T16:00:00",
                    "2025-06-18T16:00:00",
                    "2025-06-25T16:00:00",
                    "2025-07-02T16:00:00",
                    "2025-07-09T16:00:00",
                    "2025-07-16T16:00:00",
                    "2025-07-23T16:00:00",
                    "2025-07-30T16:00:00"
                ]
            },
            {
                id: "3",
                name: "Jojo Cheung",
                contactInfo: "+1 (555) 345-6789",
                emergencyContact: "Saratic Sahrae, +1 (555) 765-4321",
                notes: "Excellent at problem-solving",
                program: {
                    id: "p3",
                    name: "12-Lesson Language Arts",
                    totalLessons: 12,
                    completedLessons: 5,
                    price: 1800.00,
                    paymentStatus: true
                },
                lessonDates: [
                    "2025-06-12T14:00:00",
                    "2025-06-19T14:00:00",
                    "2025-06-26T14:00:00",
                    "2025-07-03T14:00:00",
                    "2025-07-10T14:00:00",
                    "2025-07-17T14:00:00",
                    "2025-07-24T14:00:00",
                    "2025-07-31T14:00:00",
                    "2025-08-07T14:00:00",
                    "2025-08-14T14:00:00",
                    "2025-08-21T14:00:00",
                    "2025-08-28T14:00:00"
                ]
            }
        ];

        this.programTemplates = [
            {
                id: "t1",
                name: "4-Lesson Mathematics Plan",
                totalLessons: 4,
                price: 800.00,
                description: "Basic mathematics program covering arithmetic and pre-algebra",
                lessonDates: [
                    "2025-06-10T15:00:00",
                    "2025-06-17T15:00:00",
                    "2025-06-24T15:00:00",
                    "2025-07-01T15:00:00"
                ]
            },
            {
                id: "t2",
                name: "8-Lesson Science Program",
                totalLessons: 8,
                price: 1200.00,
                description: "Comprehensive science program covering physics and chemistry",
                lessonDates: [
                    "2025-06-11T16:00:00",
                    "2025-06-18T16:00:00",
                    "2025-06-25T16:00:00",
                    "2025-07-02T16:00:00",
                    "2025-07-09T16:00:00",
                    "2025-07-16T16:00:00",
                    "2025-07-23T16:00:00",
                    "2025-07-30T16:00:00"
                ]
            },
            {
                id: "t3",
                name: "12-Lesson Language Arts",
                totalLessons: 12,
                price: 1800.00,
                description: "Advanced language arts program focusing on writing and literature",
                lessonDates: [
                    "2025-06-12T14:00:00",
                    "2025-06-19T14:00:00",
                    "2025-06-26T14:00:00",
                    "2025-07-03T14:00:00",
                    "2025-07-10T14:00:00",
                    "2025-07-17T14:00:00",
                    "2025-07-24T14:00:00",
                    "2025-07-31T14:00:00",
                    "2025-08-07T14:00:00",
                    "2025-08-14T14:00:00",
                    "2025-08-21T14:00:00",
                    "2025-08-28T14:00:00"
                ]
            }
        ];

        this.payments = [
            {
                id: "pay1",
                studentId: "1",
                amount: 800.00,
                date: "2025-06-09T10:30:00",
                method: "Credit Card",
                notes: "Full payment received"
            },
            {
                id: "pay2",
                studentId: "3",
                amount: 900.00,
                date: "2025-06-08T14:15:00",
                method: "Bank Transfer",
                notes: "50% payment received"
            },
            {
                id: "pay3",
                studentId: "3",
                amount: 900.00,
                date: "2025-06-22T11:45:00",
                method: "Bank Transfer",
                notes: "Remaining 50% payment received"
            }
        ];

        this.completedLessons = [
            {
                id: "l1",
                studentId: "1",
                date: "2025-06-10T15:00:00",
                status: "completed",
                notes: "Covered addition and subtraction"
            },
            {
                id: "l2",
                studentId: "1",
                date: "2025-06-17T15:00:00",
                status: "completed",
                notes: "Covered multiplication and division"
            },
            {
                id: "l3",
                studentId: "2",
                date: "2025-06-11T16:00:00",
                status: "completed",
                notes: "Introduction to physics"
            },
            {
                id: "l4",
                studentId: "2",
                date: "2025-06-18T16:00:00",
                status: "completed",
                notes: "Newton's laws of motion"
            },
            {
                id: "l5",
                studentId: "2",
                date: "2025-06-25T16:00:00",
                status: "completed",
                notes: "Introduction to chemistry"
            },
            {
                id: "l6",
                studentId: "3",
                date: "2025-06-12T14:00:00",
                status: "completed",
                notes: "Grammar basics"
            },
            {
                id: "l7",
                studentId: "3",
                date: "2025-06-19T14:00:00",
                status: "completed",
                notes: "Sentence structure"
            },
            {
                id: "l8",
                studentId: "3",
                date: "2025-06-26T14:00:00",
                status: "completed",
                notes: "Paragraph writing"
            },
            {
                id: "l9",
                studentId: "3",
                date: "2025-07-03T14:00:00",
                status: "completed",
                notes: "Essay planning"
            },
            {
                id: "l10",
                studentId: "3",
                date: "2025-07-10T14:00:00",
                status: "completed",
                notes: "Narrative writing"
            }
        ];
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.closest('.tab-button').dataset.tab);
            });
        });

        // Dashboard stat cards
        const totalStudentsCard = document.getElementById('total-students');
        if (totalStudentsCard && totalStudentsCard.parentElement) {
            totalStudentsCard.parentElement.addEventListener('click', () => {
                this.switchTab('students');
            });
        }

        // Search and filter
        const searchInput = document.getElementById('student-search');
        const paymentFilter = document.getElementById('payment-filter');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterStudents(e.target.value, paymentFilter.value);
            });
        }

        if (paymentFilter) {
            paymentFilter.addEventListener('change', (e) => {
                this.filterStudents(searchInput.value, e.target.value);
            });
        }

        // Calendar navigation
        const prevBtn = document.getElementById('prev-month');
        const nextBtn = document.getElementById('next-month');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.currentMonth--;
                if (this.currentMonth < 0) {
                    this.currentMonth = 11;
                    this.currentYear--;
                }
                this.renderCalendar();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.currentMonth++;
                if (this.currentMonth > 11) {
                    this.currentMonth = 0;
                    this.currentYear++;
                }
                this.renderCalendar();
            });
        }

        // Form submissions
        const addStudentForm = document.getElementById('add-student-form');
        const addLessonForm = document.getElementById('add-lesson-form');
        const addTemplateForm = document.getElementById('add-template-form');
        const recordPaymentForm = document.getElementById('record-payment-form');

        if (addStudentForm) {
            addStudentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addStudent(new FormData(e.target));
            });
        }

        if (addLessonForm) {
            addLessonForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addLesson(new FormData(e.target));
            });
        }

        if (addTemplateForm) {
            addTemplateForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addTemplate(new FormData(e.target));
            });
        }

        const editTemplateForm = document.getElementById('edit-template-form');
        if (editTemplateForm) {
            editTemplateForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.updateTemplate(new FormData(e.target));
            });
        }

        if (recordPaymentForm) {
            recordPaymentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.recordPayment(new FormData(e.target));
            });
        }

        // Modal close on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }

    updateDashboardStats() {
        const totalStudentsEl = document.getElementById('total-students');
        const upcomingLessonsEl = document.getElementById('upcoming-lessons');
        const pendingPaymentsEl = document.getElementById('pending-payments');
        
        if (totalStudentsEl) totalStudentsEl.textContent = this.students.length;
        
        const upcomingLessons = this.getUpcomingLessons().length;
        if (upcomingLessonsEl) upcomingLessonsEl.textContent = upcomingLessons;
        
        const pendingPayments = this.students.filter(s => !s.program.paymentStatus).length;
        if (pendingPaymentsEl) pendingPaymentsEl.textContent = pendingPayments;
    }

    renderDashboard() {
        const activitiesList = document.getElementById('recent-activities-list');
        if (!activitiesList) return;
        
        const recentActivities = this.getRecentActivities();
        
        if (recentActivities.length === 0) {
            activitiesList.innerHTML = '<div class="empty-state"><h3>No recent activities</h3><p>Start by adding students or recording lessons</p></div>';
            return;
        }

        activitiesList.innerHTML = recentActivities.map(activity => `
            <div class="activity-item">
                <div>${activity.description}</div>
                <div class="activity-date">${this.formatDate(activity.date)}</div>
            </div>
        `).join('');
    }

    renderStudents() {
        const studentsList = document.getElementById('students-list');
        if (!studentsList) return;
        
        if (this.students.length === 0) {
            studentsList.innerHTML = '<div class="empty-state"><h3>No students yet</h3><p>Add your first student to get started</p></div>';
            return;
        }

        studentsList.innerHTML = this.students.map(student => {
            // Calculate pending amount
            const totalPaid = this.payments.filter(p => p.studentId === student.id).reduce((sum, p) => sum + p.amount, 0);
            const pendingAmount = student.program.price - totalPaid;
            return `
                <div class="student-card" onclick="app.showStudentDetail('${student.id}')">
                    <div class="student-header">
                        <div>
                            <div class="student-name">${student.name}</div>
                            <div class="student-program">${student.program.name}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: flex-end;">
                            <div class="payment-status ${student.program.paymentStatus ? 'paid' : 'unpaid'}">
                                ${student.program.paymentStatus ? 'Paid' : 'Unpaid'}
                            </div>
                            ${!student.program.paymentStatus && pendingAmount > 0 ? `<span class="pending-amount" style="color: var(--color-error); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); margin-top: 4px;">$${pendingAmount.toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                    <div class="student-progress">
                        <div class="progress-text">
                            <span>Progress</span>
                            <span>${student.program.completedLessons}/${student.program.totalLessons} lessons</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(student.program.completedLessons / student.program.totalLessons) * 100}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderCalendar() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        
        const currentMonthEl = document.getElementById('current-month');
        if (currentMonthEl) {
            currentMonthEl.textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;
        }
        
        const calendarGrid = document.getElementById('calendar-grid');
        if (!calendarGrid) return;
        
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let calendarHTML = dayHeaders.map(day => `<div class="calendar-day-header">${day}</div>`).join('');
        
        const currentDate = startDate;
        for (let week = 0; week < 6; week++) {
            for (let day = 0; day < 7; day++) {
                const dateStr = currentDate.toISOString().split('T')[0];
                const isCurrentMonth = currentDate.getMonth() === this.currentMonth;
                const hasLessons = this.getLessonsForDate(dateStr).length > 0;
                const isSelected = this.selectedDate === dateStr;
                
                calendarHTML += `
                    <div class="calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${hasLessons ? 'has-lessons' : ''} ${isSelected ? 'selected' : ''}" 
                         onclick="app.selectDate('${dateStr}')">
                        ${currentDate.getDate()}
                    </div>
                `;
                
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        
        calendarGrid.innerHTML = calendarHTML;
        
        if (this.selectedDate) {
            this.showLessonsForDate(this.selectedDate);
        }
    }

    renderSettings() {
        const templatesContainer = document.getElementById('program-templates');
        if (!templatesContainer) return;
        
        templatesContainer.innerHTML = this.programTemplates.map(template => `
            <div class="template-item">
                <div class="template-info">
                    <div class="template-name">${template.name}</div>
                    <div class="template-details">${template.totalLessons} lessons • ${template.description}</div>
                </div>
                <div class="template-actions">
                    <div class="template-price">$${template.price.toFixed(2)}</div>
                    <button class="btn btn--secondary btn--sm" onclick="app.showEditTemplateModal('${template.id}')">Edit</button>
                </div>
            </div>
        `).join('');
    }

    filterStudents(searchTerm, paymentFilter) {
        let filteredStudents = this.students;
        
        if (searchTerm) {
            filteredStudents = filteredStudents.filter(student =>
                student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.program.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (paymentFilter) {
            filteredStudents = filteredStudents.filter(student =>
                paymentFilter === 'paid' ? student.program.paymentStatus : !student.program.paymentStatus
            );
        }
        
        const studentsList = document.getElementById('students-list');
        if (!studentsList) return;
        
        if (filteredStudents.length === 0) {
            studentsList.innerHTML = '<div class="empty-state"><h3>No students found</h3><p>Try adjusting your search or filter</p></div>';
            return;
        }
        
        studentsList.innerHTML = filteredStudents.map(student => {
            // Calculate pending amount
            const totalPaid = this.payments.filter(p => p.studentId === student.id).reduce((sum, p) => sum + p.amount, 0);
            const pendingAmount = student.program.price - totalPaid;
            return `
                <div class="student-card" onclick="app.showStudentDetail('${student.id}')">
                    <div class="student-header">
                        <div>
                            <div class="student-name">${student.name}</div>
                            <div class="student-program">${student.program.name}</div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: flex-end;">
                            <div class="payment-status ${student.program.paymentStatus ? 'paid' : 'unpaid'}">
                                ${student.program.paymentStatus ? 'Paid' : 'Unpaid'}
                            </div>
                            ${!student.program.paymentStatus && pendingAmount > 0 ? `<span class="pending-amount" style="color: var(--color-error); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); margin-top: 4px;">$${pendingAmount.toFixed(2)} pending</span>` : ''}
                        </div>
                    </div>
                    <div class="student-progress">
                        <div class="progress-text">
                            <span>Progress</span>
                            <span>${student.program.completedLessons}/${student.program.totalLessons} lessons</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(student.program.completedLessons / student.program.totalLessons) * 100}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    selectDate(dateStr) {
        this.selectedDate = dateStr;
        this.renderCalendar();
    }

    showLessonsForDate(dateStr) {
        const lessons = this.getLessonsForDate(dateStr);
        const container = document.getElementById('selected-day-lessons');
        if (!container) return;
        
        if (lessons.length === 0) {
            container.innerHTML = `
                <h3>No lessons on ${this.formatDate(dateStr)}</h3>
                <p>Click "Record Lesson" to add a lesson for this day.</p>
            `;
            return;
        }
        
        container.innerHTML = `
            <h3>Lessons for ${this.formatDate(dateStr)}</h3>
            ${lessons.map(lesson => `
                <div class="lesson-item">
                    <div class="lesson-info">
                        <div class="lesson-student">${lesson.studentName}</div>
                        <div class="lesson-time">${this.formatTime(lesson.date)}</div>
                    </div>
                    <div class="lesson-status ${lesson.status}">${this.capitalizeFirst(lesson.status)}</div>
                </div>
            `).join('')}
        `;
    }

    showStudentDetail(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;
        
        this.currentStudentId = studentId;
        const modal = document.getElementById('student-detail-modal');
        const nameElement = document.getElementById('student-detail-name');
        const contentElement = document.getElementById('student-detail-content');
        
        if (!modal || !nameElement || !contentElement) return;
        
        nameElement.textContent = student.name;
        
        const studentPayments = this.payments.filter(p => p.studentId === studentId);
        const studentLessons = this.completedLessons.filter(l => l.studentId === studentId);
        
        contentElement.innerHTML = `
            <div class="student-detail-section">
                <h3>Contact Information</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Phone:</span>
                        <span class="detail-value">${student.contactInfo}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Emergency Contact:</span>
                        <span class="detail-value">${student.emergencyContact}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Notes:</span>
                        <span class="detail-value">${student.notes || 'No notes'}</span>
                    </div>
                </div>
            </div>
            
            <div class="student-detail-section">
                <h3>Program Details</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Program:</span>
                        <span class="detail-value">${student.program.name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Progress:</span>
                        <span class="detail-value">${student.program.completedLessons}/${student.program.totalLessons} lessons</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Price:</span>
                        <span class="detail-value">$${student.program.price.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Payment Status:</span>
                        <span class="detail-value">
                            <span class="payment-status ${student.program.paymentStatus ? 'paid' : 'unpaid'}">
                                ${student.program.paymentStatus ? 'Paid' : 'Unpaid'}
                            </span>
                        </span>
                    </div>
                </div>
                <div class="progress-bar" style="margin-top: 16px;">
                    <div class="progress-fill" style="width: ${(student.program.completedLessons / student.program.totalLessons) * 100}%"></div>
                </div>
            </div>
            
            <div class="student-actions">
                <button class="btn btn--secondary btn--sm" onclick="app.showRecordPaymentModal('${studentId}')">Record Payment</button>
                <button class="btn btn--primary btn--sm" onclick="app.showAddLessonModalForStudent('${studentId}')">Add Lesson</button>
            </div>
            
            ${studentPayments.length > 0 ? `
                <div class="student-detail-section">
                    <h3>Payment History</h3>
                    <div class="payment-history">
                        ${studentPayments.map(payment => `
                            <div class="payment-item">
                                <div>
                                    <div class="payment-amount">$${payment.amount.toFixed(2)}</div>
                                    <div class="payment-date">${this.formatDate(payment.date)} • ${payment.method}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${studentLessons.length > 0 ? `
                <div class="student-detail-section">
                    <h3>Recent Lessons</h3>
                    <div class="payment-history">
                        ${studentLessons.slice(-5).map(lesson => `
                            <div class="payment-item">
                                <div>
                                    <div class="payment-date">${this.formatDate(lesson.date)}</div>
                                    <div style="font-size: 12px; color: var(--color-text-secondary);">${lesson.notes || 'No notes'}</div>
                                </div>
                                <div class="lesson-status ${lesson.status}">${this.capitalizeFirst(lesson.status)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
        
        this.showModal('student-detail-modal');
    }

    addStudent(formData) {
        const selectedTemplate = this.programTemplates.find(t => t.id === formData.get('programId'));
        if (!selectedTemplate) {
            alert('Please select a program template');
            return;
        }

        const student = {
            id: Date.now().toString(),
            name: formData.get('name'),
            contactInfo: formData.get('contactInfo'),
            emergencyContact: formData.get('emergencyContact'),
            notes: formData.get('notes'),
            program: {
                id: selectedTemplate.id,
                name: selectedTemplate.name,
                totalLessons: selectedTemplate.totalLessons,
                price: selectedTemplate.price,
                completedLessons: 0,
                paymentStatus: false
            },
            lessonDates: selectedTemplate.lessonDates ? [...selectedTemplate.lessonDates] : []
        };
        
        this.students.push(student);
        this.renderStudents();
        this.updateDashboardStats();
        this.renderDashboard();
        this.closeModal('add-student-modal');
        document.getElementById('add-student-form').reset();
        
        alert(`Student ${student.name} added successfully!`);
    }

    addLesson(formData) {
        const lesson = {
            id: Date.now().toString(),
            studentId: formData.get('studentId'),
            date: formData.get('date') + 'T' + formData.get('time') + ':00',
            status: formData.get('status'),
            notes: formData.get('notes')
        };
        
        this.completedLessons.push(lesson);
        
        if (lesson.status === 'completed') {
            const student = this.students.find(s => s.id === lesson.studentId);
            if (student) {
                student.program.completedLessons++;
            }
        }
        
        this.renderStudents();
        this.renderCalendar();
        this.updateDashboardStats();
        this.renderDashboard();
        this.closeModal('add-lesson-modal');
        document.getElementById('add-lesson-form').reset();
        
        alert('Lesson recorded successfully!');
    }

    addTemplate(formData) {
        const totalLessons = parseInt(formData.get('totalLessons'));
        const lessonDates = [];

        const startDate = formData.get('startDate');
        const weekDay = formData.get('weekDay');
        const time = formData.get('time');

        if (startDate && weekDay && time) {
            let currentDate = new Date(startDate);
            const dayOfWeek = parseInt(weekDay);
            
            // Adjust to the first occurrence of the selected weekday
            while (currentDate.getDay() !== dayOfWeek) {
                currentDate.setDate(currentDate.getDate() + 1);
            }

            for (let i = 0; i < totalLessons; i++) {
                const lessonDate = new Date(currentDate);
                const [hours, minutes] = time.split(':');
                lessonDate.setHours(hours, minutes);
                lessonDates.push(lessonDate.toISOString());
                currentDate.setDate(currentDate.getDate() + 7);
            }
        }

        const template = {
            id: Date.now().toString(),
            name: formData.get('name'),
            totalLessons: totalLessons,
            price: parseFloat(formData.get('price')),
            description: formData.get('description'),
            lessonDates: lessonDates
        };
        
        this.programTemplates.push(template);
        this.renderSettings();
        this.populateTemplateSelects();
        this.closeModal('add-template-modal');
        document.getElementById('add-template-form').reset();
        
        alert(`Template ${template.name} added successfully!`);
    }

    recordPayment(formData) {
        const payment = {
            id: Date.now().toString(),
            studentId: this.currentStudentId,
            amount: parseFloat(formData.get('amount')),
            date: formData.get('date') + 'T12:00:00',
            method: formData.get('method'),
            notes: formData.get('notes')
        };
        
        this.payments.push(payment);
        
        // Update student payment status
        const student = this.students.find(s => s.id === this.currentStudentId);
        if (student) {
            const totalPaid = this.payments
                .filter(p => p.studentId === this.currentStudentId)
                .reduce((sum, p) => sum + p.amount, 0);
            
            if (totalPaid >= student.program.price) {
                student.program.paymentStatus = true;
            }
        }
        
        this.renderStudents();
        this.updateDashboardStats();
        this.renderDashboard();
        this.closeModal('record-payment-modal');
        document.getElementById('record-payment-form').reset();
        
        alert(`Payment of $${payment.amount.toFixed(2)} recorded successfully!`);
        
        // Refresh student detail if open
        if (this.currentStudentId) {
            this.showStudentDetail(this.currentStudentId);
        }
    }

    updateTemplate(formData) {
        const templateId = formData.get('id');
        const template = this.programTemplates.find(t => t.id === templateId);
        if (template) {
            template.name = formData.get('name');
            template.totalLessons = parseInt(formData.get('totalLessons'));
            template.price = parseFloat(formData.get('price'));
            template.description = formData.get('description');
        }

        this.renderSettings();
        this.populateTemplateSelects();
        this.closeModal('edit-template-modal');
        alert(`Template ${template.name} updated successfully!`);
    }

    // Modal management
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Populate selects when showing modals
        if (modalId === 'add-student-modal') {
            this.populateTemplateSelects();
        } else if (modalId === 'add-lesson-modal') {
            this.populateStudentSelects();
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            const dateInput = document.querySelector('#add-lesson-form input[name="date"]');
            if (dateInput) dateInput.value = today;
        } else if (modalId === 'add-template-modal') {
            this.populateTemplateSelects();
        } else if (modalId === 'edit-template-modal') {
            this.populateTemplateSelects();
        }
        
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input, select, textarea');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
        this.currentStudentId = null;
    }

    showAddStudentModal() {
        this.showModal('add-student-modal');
    }

    showAddLessonModal() {
        this.showModal('add-lesson-modal');
    }

    showAddLessonModalForStudent(studentId) {
        this.showModal('add-lesson-modal');
        setTimeout(() => {
            const studentSelect = document.querySelector('#add-lesson-form select[name="studentId"]');
            if (studentSelect) studentSelect.value = studentId;
        }, 100);
    }

    showAddTemplateModal() {
        this.showModal('add-template-modal');
    }

    showEditTemplateModal(templateId) {
        const template = this.programTemplates.find(t => t.id === templateId);
        if (!template) return;

        const form = document.getElementById('edit-template-form');
        form.querySelector('[name="id"]').value = template.id;
        form.querySelector('[name="name"]').value = template.name;
        form.querySelector('[name="totalLessons"]').value = template.totalLessons;
        form.querySelector('[name="price"]').value = template.price;
        form.querySelector('[name="description"]').value = template.description;

        this.showModal('edit-template-modal');
    }

    showRecordPaymentModal(studentId) {
        this.currentStudentId = studentId;
        this.showModal('record-payment-modal');
        // Set today's date as default
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.querySelector('#record-payment-form input[name="date"]');
        if (dateInput) dateInput.value = today;
    }

    populateTemplateSelects() {
        const select = document.querySelector('#add-student-form select[name="programId"]');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select a program...</option>' +
            this.programTemplates.map(template => 
                `<option value="${template.id}">${template.name} - $${template.price.toFixed(2)}</option>`
            ).join('');
    }

    populateStudentSelects() {
        const select = document.querySelector('#add-lesson-form select[name="studentId"]');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select a student...</option>' +
            this.students.map(student => 
                `<option value="${student.id}">${student.name}</option>`
            ).join('');
    }

    // Utility functions
    getLessonsForDate(dateStr) {
        const lessons = [];
        
        // Get scheduled lessons
        this.students.forEach(student => {
            student.lessonDates.forEach(lessonDate => {
                const date = new Date(lessonDate).toISOString().split('T')[0];
                if (date === dateStr) {
                    const completedLesson = this.completedLessons.find(l => 
                        l.studentId === student.id && 
                        new Date(l.date).toISOString().split('T')[0] === dateStr
                    );
                    
                    lessons.push({
                        studentId: student.id,
                        studentName: student.name,
                        date: lessonDate,
                        status: completedLesson ? completedLesson.status : 'scheduled'
                    });
                }
            });
        });
        
        return lessons;
    }

    getUpcomingLessons() {
        const today = new Date();
        const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        
        const upcomingLessons = [];
        this.students.forEach(student => {
            student.lessonDates.forEach(lessonDate => {
                const date = new Date(lessonDate);
                if (date >= today && date <= oneWeekFromNow) {
                    upcomingLessons.push({
                        studentName: student.name,
                        date: lessonDate
                    });
                }
            });
        });
        
        return upcomingLessons;
    }

    getRecentActivities() {
        const activities = [];
        
        // Recent lessons
        this.completedLessons.slice(-5).forEach(lesson => {
            const student = this.students.find(s => s.id === lesson.studentId);
            if (student) {
                activities.push({
                    description: `Lesson ${lesson.status} with ${student.name}`,
                    date: lesson.date,
                    type: 'lesson'
                });
            }
        });
        
        // Recent payments
        this.payments.slice(-3).forEach(payment => {
            const student = this.students.find(s => s.id === payment.studentId);
            if (student) {
                activities.push({
                    description: `Payment of $${payment.amount.toFixed(2)} received from ${student.name}`,
                    date: payment.date,
                    type: 'payment'
                });
            }
        });
        
        return activities.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    formatTime(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    exportData() {
        const data = {
            students: this.students,
            programTemplates: this.programTemplates,
            payments: this.payments,
            completedLessons: this.completedLessons,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `teachtrack-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Data exported successfully!');
    }

    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        if (data.students && data.programTemplates) {
                            this.students = data.students;
                            this.programTemplates = data.programTemplates;
                            this.payments = data.payments || [];
                            this.completedLessons = data.completedLessons || [];
                            
                            this.renderDashboard();
                            this.renderStudents();
                            this.renderCalendar();
                            this.renderSettings();
                            this.updateDashboardStats();
                            
                            alert('Data imported successfully!');
                        } else {
                            alert('Invalid file format');
                        }
                    } catch (error) {
                        alert('Error reading file: ' + error.message);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }
}

// Global functions for HTML onclick handlers
function closeModal(modalId) {
    app.closeModal(modalId);
}

function showAddStudentModal() {
    app.showAddStudentModal();
}

function showAddLessonModal() {
    app.showAddLessonModal();
}

function showAddTemplateModal() {
    app.showAddTemplateModal();
}

function showEditTemplateModal(templateId) {
    app.showEditTemplateModal(templateId);
}

function exportData() {
    app.exportData();
}

function importData() {
    app.importData();
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.app = new TeachTrackApp();
});
