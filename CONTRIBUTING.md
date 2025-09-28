# Contributing to Vahan Bazar

Thank you for your interest in contributing to Vahan Bazar! 🏍️ This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v8.0 or higher)
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/vahan-bazar.git
   cd vahan-bazar
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/originalowner/vahan-bazar.git
   ```

## 🛠️ Development Setup

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Set up the database:**
   ```bash
   npm run db-reset
   ```

3. **Start the development servers:**
   ```bash
   npm start
   ```

4. **Verify the setup:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🔧 Making Changes

### Branch Strategy

- Create a new branch for each feature or bug fix
- Use descriptive branch names:
  - `feature/add-user-profiles`
  - `bugfix/fix-login-error`
  - `docs/update-readme`

### Development Workflow

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Write clean, readable code
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes:**
   ```bash
   # Run frontend tests
   cd frontend && npm test
   
   # Run backend tests
   cd backend && npm test
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add user profile management"
   ```

### Commit Message Format

Use conventional commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add password reset functionality
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
```

## 🔄 Pull Request Process

1. **Ensure your branch is up to date:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request:**
   - Use the PR template
   - Provide a clear description
   - Link related issues
   - Add screenshots for UI changes

4. **Respond to feedback:**
   - Address review comments
   - Make requested changes
   - Keep the PR updated

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable

### Feature Requests

For feature requests, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Proposed Solution**: How you think it should work
- **Alternatives**: Other solutions you've considered

## 📝 Coding Standards

### JavaScript/React

- Use ES6+ features
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Add PropTypes or TypeScript types

### CSS/Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing and colors
- Ensure accessibility compliance

### Backend

- Use async/await for asynchronous operations
- Implement proper error handling
- Add input validation
- Follow RESTful API conventions

## 🧪 Testing

### Frontend Testing

```bash
cd frontend
npm test                    # Run all tests
npm test -- --coverage     # Run with coverage
npm test -- --watch        # Watch mode
```

### Backend Testing

```bash
cd backend
npm test                   # Run all tests
npm run test:coverage      # Run with coverage
```

### Test Guidelines

- Write unit tests for new functions
- Add integration tests for API endpoints
- Test error scenarios
- Maintain good test coverage

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions
- Document complex algorithms
- Explain business logic
- Update README for new features

### API Documentation

- Document new API endpoints
- Include request/response examples
- Specify authentication requirements
- List possible error codes

## 🎯 Areas for Contribution

### High Priority

- 🐛 Bug fixes
- 📱 Mobile responsiveness improvements
- 🔒 Security enhancements
- ⚡ Performance optimizations

### Medium Priority

- ✨ New features
- 🎨 UI/UX improvements
- 📊 Analytics and reporting
- 🔧 Developer tools

### Low Priority

- 📚 Documentation improvements
- 🧪 Test coverage
- 🎨 Code refactoring
- 🌐 Internationalization

## 🏆 Recognition

Contributors will be recognized in:

- CONTRIBUTORS.md file
- Release notes
- Project documentation
- GitHub contributors page

## 📞 Getting Help

If you need help:

- Check existing issues and discussions
- Join our Discord community
- Email: contributors@vahanbazar.com
- Create a new issue with the "question" label

## 🙏 Thank You

Thank you for contributing to Vahan Bazar! Your contributions help make this project better for everyone in the community.

---

*Happy coding! 🚀*
