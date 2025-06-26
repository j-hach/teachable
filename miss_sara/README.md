# iOS Student Management App for Freelance Teachers

A SwiftUI-based iOS application designed specifically for freelance teachers to efficiently manage students, track lesson progress, and monitor payment status. This app streamlines administrative tasks while providing a centralized platform for managing teaching operations.

## Overview

This app addresses the core needs of freelance teachers who need to manage multiple students across different programs, track lesson completion, and monitor payment status. Built with modern iOS development practices using SwiftUI and Core Data, it provides a reliable, user-friendly solution for educational administration.

## Features

### Student Information Management
- **Student Profile Creation**: Input comprehensive student details including name, contact information, emergency contacts, and relevant notes
- **Program Registration System**: Assign students to specific programs (e.g., "4-Lesson Mathematics Plan - $800")
- **Multiple Student Support**: Manage multiple students simultaneously with easy navigation between profiles

### Lesson Tracking System
- **Date Recording**: Calendar-based system for recording lesson dates with intuitive input methods
- **Lesson Counter**: Automatically track completed lessons against total program allocation
- **Progress Visualization**: Display lesson progress through visual indicators like progress bars and completion percentages

### Payment Management
- **Payment Status Tracking**: Clear indicators for payment status (paid/unpaid) for each program or lesson package
- **Payment History**: Maintain records of payment dates and amounts received
- **Credit System**: Credit-based system where payments add credits and lessons deduct credits automatically

### Administrative Tools
- **Student Dashboard**: Display all students with quick overview of program status and payment information
- **Lesson Scheduler**: Calendar integration for scheduling and recording completed lessons
- **Payment Tracker**: Visual indicators showing which students have outstanding payments
- **Search and Filter**: Quick search functionality to find specific students or filter by payment status
- **Backup and Export**: Data export functionality for record-keeping and backup purposes
- **Reporting**: Generate simple reports showing lesson completion rates and payment summaries

## Technical Stack

- **Platform**: iOS 14.0+
- **Language**: Swift 5.0+
- **Framework**: SwiftUI
- **Architecture**: MVVM (Model-View-ViewModel)
- **Database**: Core Data for persistent local storage
- **Web View**: WKWebView for HTML content display

## Data Structure

```swift
Student Entity:
- Name (String)
- Contact Information (String)
- Program Details (String)
- Total Lessons (Integer)
- Completed Lessons (Integer)
- Program Price (Decimal)
- Payment Status (Boolean)
- Lesson Dates (Array of Dates)
- Notes (String)

Lesson Entity:
- Date (Date)
- Status (String - completed/scheduled/missed)
- Notes (String)
- Relationship to Student

Payment Entity:
- Amount (Decimal)
- Date (Date)
- Method (String)
- Notes (String)
- Relationship to Student
```

## Requirements

- Xcode 14.0 or later
- iOS 14.0 or later
- macOS 12.0 or later (for development)
- Apple Developer Account (free or paid)

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ios-student-management-app.git
cd ios-student-management-app
```

### 2. Open in Xcode
1. Open the `.xcodeproj` file in Xcode
2. Select your development team in the Signing & Capabilities tab
3. Ensure your bundle identifier is unique

### 3. Configure Signing
1. Select your project in the Project Navigator
2. Select your app target
3. Go to "Signing & Capabilities" tab
4. Check "Automatically manage signing"
5. Select your development team from the dropdown

### 4. Add Required Assets
1. Add your app icon to `Assets.xcassets/AppIcon`
2. Add launch screen images to `Assets.xcassets`
3. Add any HTML files to the project bundle if using web views

### 5. Build and Run
1. Connect your iOS device via USB
2. Select your device from the scheme dropdown
3. Click the Run button to build and install

## Usage

### Adding Students
1. Tap the "+" button on the main dashboard
2. Fill in student information including name, contact details, and program selection
3. Set the program details (number of lessons, pricing)
4. Save the student profile

### Recording Lessons
1. Select a student from the dashboard
2. Navigate to the lesson tracking section
3. Mark lessons as completed using the date picker
4. View progress through the visual indicators

### Managing Payments
1. Access the payment section for each student
2. Mark payments as received when funds are collected
3. View payment history and outstanding balances
4. Generate payment reports as needed

## Development Phases

### Phase 1: Core Functionality (Completed)
- SwiftUI project setup with Core Data integration
- Student profile creation and management
- Lesson tracking system with date recording
- Basic payment status tracking

### Phase 2: Enhanced Features (In Progress)
- Calendar integration for lesson scheduling
- Search and filtering capabilities
- Reporting and analytics features
- Data export functionality

### Phase 3: Polish and Optimization (Planned)
- UI refinement based on user feedback
- Push notifications for reminders
- Backup and synchronization features
- Comprehensive testing and bug fixes

## User Experience Features

### Intuitive Design
- Clean, minimalist interface focusing on essential functions
- Quick data entry processes
- Clear visual feedback for completion and payment status

### Workflow Optimization
- Batch operations for multiple students
- Template system for common programs
- Automatic data persistence across app sessions

## Troubleshooting

### Common Issues

**Device Support Files Missing**
If you encounter "Could not locate device support files" error:
1. Update Xcode to the latest version
2. Or manually add device support files to Xcode
3. Ensure your iOS version is supported by your Xcode version

**Signing Issues**
If you see "Signing requires a development team" error:
1. Add your Apple ID to Xcode Preferences > Accounts
2. Select your Personal Team in Signing & Capabilities
3. Ensure your bundle identifier is unique

**Device Not Appearing**
If your device doesn't appear in the dropdown:
1. Widen your Xcode window to reveal the device dropdown
2. Enable Developer Mode on your iOS device
3. Trust the computer when prompted on your device

## File Structure

```
ios-student-management-app/
├── Models/
│   ├── Student.swift
│   ├── Lesson.swift
│   └── Payment.swift
├── Views/
│   ├── ContentView.swift
│   ├── StudentDetailView.swift
│   ├── LessonTrackingView.swift
│   └── PaymentView.swift
├── ViewModels/
│   └── StudentViewModel.swift
├── Assets.xcassets/
│   ├── AppIcon.appiconset/
│   └── LaunchIcon.imageset/
├── Supporting Files/
│   ├── LaunchScreen.storyboard
│   └── Info.plist
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or feature requests, please create an issue in the GitHub repository or contact the development team.

## Acknowledgments

- Built with Swift and SwiftUI
- Uses Core Data for persistent storage
- Follows Apple's Human Interface Guidelines
- Implements MVVM architecture pattern

## Version History

- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added enhanced features and UI improvements
- **v1.2.0** - Implemented reporting and export capabilities

---

**Note**: This app is designed for personal and educational use. For commercial deployment, ensure compliance with relevant data protection regulations and obtain appropriate licenses.
