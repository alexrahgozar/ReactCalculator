import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Grid from 'react-css-grid'
console.log(Grid)

class CalculatorFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      screen: '',
      operator1: '',
      operator2: '',
      operator3: '',
      operator4: '',
      num1: '',
      lastNumber: '',
      firstN: '',
      secondN: '',
      thirdN: '',
      calculate:'',
      negaPositive: '',
      decimalCount: 0,
      universalCount: 0
    }
    this.handleClickReset = this.handleClickReset.bind(this)
    this.handleClickDecimal = this.handleClickDecimal.bind(this)
    this.handleClickDivide = this.handleClickDivide.bind(this)
    this.handleClickMultiply = this.handleClickMultiply.bind(this)
    this.handleClickPosNegative = this.handleClickPosNegative.bind(this)
    this.handleClickAddition = this.handleClickAddition.bind(this)
    this.handleClickSubtraction = this.handleClickSubtraction.bind(this)
    this.handleClickZero =  this.handleClickZero.bind(this)
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
    this.handleClickFour = this.handleClickFour.bind(this)
    this.handleClickFive = this.handleClickFive.bind(this)
    this.handleClickSix = this.handleClickSix.bind(this)
    this.handleClickSeven = this.handleClickSeven.bind(this)
    this.handleClickEight = this.handleClickEight.bind(this)
    this.handleClickNine = this.handleClickNine.bind(this)
    this.handleClickEqual = this.handleClickEqual.bind(this)
  }


  handleClickReset() {
    console.log('RESET')
    this.setState({
      total: 0,
      screen: '',
      operator1: '',
      operator2: '',
      operator3: '',
      operator4: '',
      num1: '',
      lastNumber: '',
      firstN: '',
      secondN: '',
      thirdN: '',
      calculate:'',
      negaPositive: '',
      decimalCount: 0,
      universalCount: 0
    })
  }

///// Equal Operator
  handleClickEqual() {
    console.log('START OF EQUAL!!!')
    console.log('EQ --- Total: ', this.state.total, ' NUM1: ', this.state.num1, ' firstN: ', this.state.firstN, ' secondN: ', this.state.secondN,
                ' OP1: ', this.state.operator1, ' OP2: ', this.state.operator2, ' OP3: ', this.state.operator3, ' OP4: ', this.state.operator4,
                ' UNIV: ', this.state.universalCount)
    this.setState({
      decimalCount: 0,
      universalCount: 0
    })

    if(this.state.num1.length && this.state.firstN === '' && this.state.operator1 === '*' && this.state.operator2 !== '/') {
      console.log('EQ1T*N')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '',
        operator3: '**'

      })
    }
    // if(this.state.num1.length && this.state.firstN === '' && this.state.operator1 === '*'  && this.state.operator3.length) {
    //   console.log('eq1eqqqqqx/')
    //   this.setState({
    //     total: this.state.total * Number(this.state.num1),
    //     screen: this.state.total * Number(this.state.num1),
    //     lastNumber: this.state.num1,
    //     num1: '',
    //     operator1: '',
    //     operator3: '//'
    //
    //   })
    // }
    if(this.state.total === 0 && this.state.operator1 === '*' && this.state.operator2 !== '+' && this.state.num1.length && this.state.firstN.length) {
      console.log('EQ2*NF')
      this.setState({
        total: this.state.total + ( Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + ( Number(this.state.num1) * Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '',
        operator2: '',
        operator3: '**',

      })
    }
    // *+
    if(this.state.operator1 === '*' && this.state.operator2 === '+' && this.state.num1.length && this.state.firstN.length && this.state.secondN.length) {
      console.log('EQ3*+')
      this.setState({
        total: this.state.total + ( (Number(this.state.firstN) * Number(this.state.secondN)) + Number(this.state.num1)),
        screen: this.state.total + ( (Number(this.state.firstN) * Number(this.state.secondN)) + Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '',
        operator2: '',
        operator3: '++',

      })
    }

    // +*
    if(this.state.num1.length !== 0 && this.state.firstN.length !== 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '+') {
        console.log('EQ4+*',' Num1: ', this.state.num1, ' SecondN: ', this.state.secondN, ' firstN: ', this.state.firstN )
      this.setState({
        total: this.state.total +  (Number(this.state.firstN) + ( Number(this.state.num1) * Number(this.state.secondN) )) ,
        screen: this.state.total +  (Number(this.state.firstN) + ( Number(this.state.num1) * Number(this.state.secondN) )),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }

    //-*
    if(this.state.num1.length !== 0 && this.state.firstN.length !== 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '-') {
        console.log('EQ5-*',' Num1: ', this.state.num1, ' SecondN: ', this.state.secondN, ' firstN: ', this.state.firstN )
      this.setState({
        total: this.state.total +  (Number(this.state.firstN) - ( Number(this.state.num1) * Number(this.state.secondN) ) ) ,
        screen: this.state.total +  ( Number(this.state.firstN) - ( Number(this.state.num1) * Number(this.state.secondN) )),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }
    //-*+
    // if(this.state.universalCount < 2 && this.state.num1.length !== 0 && this.state.firstN.length !== 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
    //   && this.state.operator1 === '-') {
    //     console.log('IM -*')
    //     console.log('fuccccckkkk333')
    //   this.setState({
    //     total: this.state.total +  (-( Number(this.state.num1) * Number(this.state.secondN) ) + Number(this.state.firstN)) ,
    //     screen: this.state.total +  (-( Number(this.state.num1) * Number(this.state.secondN) ) + Number(this.state.firstN)),
    //     lastNumber: this.state.num1,
    //     num1: '',
    //     firstN: '',
    //     secondN: '',
    //     operator1: '',
    //     operator2: '',
    //     operator3: '**',
    //   })
    // }
    ////////

    if(this.state.universalCount > 0 && this.state.operator1 === '*' && this.state.operator2 === '+' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('EQC7+/x')
      this.setState({
        total: (this.state.total * Number(this.state.num1) + Number(this.state.firstN)),
        screen: (this.state.total * Number(this.state.num1) + Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
        universalCount: ''
      })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '*' && this.state.operator2 === '-' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('EQ8-/x')
      this.setState({
        total: (Number(this.state.firstN) - (this.state.total * Number(this.state.num1)) ),
        screen: (Number(this.state.firstN) - (this.state.total * Number(this.state.num1)) ),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
        universalCount: ''
      })
    }

    // okk//
    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '+' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('EQ9+//')
      this.setState({
        total: (this.state.total / Number(this.state.num1) + Number(this.state.firstN)),
        screen: (this.state.total / Number(this.state.num1) + Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '-' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('EQ10-//', ' TOTAL: ', this.state.total)
      this.setState({
        total: ((Number(this.state.firstN)) - (this.state.total / Number(this.state.num1)) ),
        screen: ((Number(this.state.firstN)) - (this.state.total / Number(this.state.num1)) ),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }
    if(this.state.universalCount > 1 && this.state.num1.length !== 0 && this.state.firstN < 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '-') {
      console.log('EQC11-*')
      this.setState({
        total: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }
    if(this.state.universalCount > 1 && this.state.num1.length !== 0 && this.state.firstN.length === 0 &&  this.state.secondN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '+') {
      console.log('EQC12+*')
      this.setState({
        total: this.state.total + (Number(this.state.num1) * Number(this.state.secondN)),
        screen: this.state.total + (Number(this.state.num1) * Number(this.state.secondN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }

    if(this.state.universalCount > 1 && this.state.num1.length !== 0 && this.state.firstN.length === 0 &&  this.state.secondN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '-') {
      console.log('EQC13+*')
      this.setState({
        total: this.state.total + ((-1 * Number(this.state.num1)) * Number(this.state.secondN)),
        screen: this.state.total + ((-1 * Number(this.state.num1)) * Number(this.state.secondN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }
    if(this.state.universalCount > 1 && this.state.num1.length !== 0 && this.state.firstN < 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '+') {
      console.log('EQC14+*')
      this.setState({
        total: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '**',
      })
    }


    if(this.state.operator3 === '**' && this.state.num1.length === 0) {
      console.log('EQ15***')
      this.setState({
        total: this.state.total * Number(this.state.lastNumber),
        screen: this.state.total * Number(this.state.lastNumber),
        operator3: '**'
      })
    }

    if(this.state.operator2 !== '/' && this.state.operator2 !== '*' && this.state.num1.length !== 0 && this.state.firstN.length !== 0 && this.state.operator1 === '+' && this.state.operator3 !== '++' && this.state.operator2 !== '-') {
      console.log('EQ16-')
      this.setState({
        total: this.state.total + (Number(this.state.num1) + Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) + Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator3: '++'
      })
    }
    if(this.state.num1 !== 0 && this.state.firstN.length !== 0 && this.state.operator1 === '+' && this.state.operator3 !== '++' && this.state.operator2 === '-') {
      console.log('EQ17+-=', this.state.num1, this.state.firstN, this.state.secondN)
      this.setState({
        total: this.state.total + ((Number(this.state.firstN) + Number(this.state.secondN)) - Number(this.state.num1)),
        screen: this.state.total + ((Number(this.state.firstN) + Number(this.state.secondN)) - Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator3: '--'
      })
    }
    if(this.state.num1 !== 0 && this.state.total !== 0 && this.state.operator1 === '+' && this.state.secondN === '' && this.state.firstN) {
      console.log('EQ18', this.state.num1, this.state.total)
      this.setState({
        total: this.state.total + Number(this.state.num1),
        screen: this.state.total + Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator3: '++'
      })
    }
    if(this.state.num1 !== 0 && this.state.total !== 0 && this.state.operator1 === '-' && this.state.operator2 !== '/' && this.state.operator2 !== '*') {
      console.log('EQ19', this.state.num1, this.state.total)
      this.setState({
        total: this.state.total - Number(this.state.num1),
        screen: this.state.total - Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator3: '--'
      })
    }

    if(this.state.num1 !== 0 && this.state.total !== 0 && this.state.operator1 === '+' && this.state.operator2 !== '/' && this.state.operator2 !== '*') {
      console.log('EQ20++', this.state.num1, this.state.total)
      this.setState({
        total: this.state.total + Number(this.state.num1),
        screen: this.state.total + Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator3: '++'
      })
    }
    if(this.state.operator3 === '++' && this.state.num1 === '') {
      console.log('EQ21+++')
      console.log(this.state.lastNumber)
      this.setState({
        total: this.state.total + Number(this.state.lastNumber),
        screen: this.state.total + Number(this.state.lastNumber),
        lastNumber: this.state.lastNumber,
        operator3: '++',
        num1: ''
      })
    }
    if(this.state.operator3 === '--' && this.state.num1 === '') {
      console.log('EQ22---')
      console.log(this.state.lastNumber)
      this.setState({
        total: this.state.total - Number(this.state.lastNumber),
        screen: this.state.total - Number(this.state.lastNumber),
        lastNumber: this.state.lastNumber,
        operator3: '--',
        num1: ''
      })
    }
    if(this.state.firstN.length &&  this.state.operator1 === '-' &&  this.state.operator2 === '') {
      console.log('EQ23-')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator3: '--'
      })
    }
    /// divide
    if(this.state.operator1 === '/' && this.state.operator2 !== '+' && this.state.operator2 !== '-' && this.state.operator2 !== '*' && this.state.num1 !== '' && this.state.firstN !== '' && this.state.operator4 === '') {
      console.log('EQ24/')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '',
        operator3: '//'
      })
    }
    if(this.state.universalCount === 0 && this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '+' && this.state.operator2 === '/') {
        console.log('EQ25+/=')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) + (Number(this.state.secondN) / Number(this.state.num1))),
        screen: this.state.total + (Number(this.state.firstN) + (Number(this.state.secondN) / Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: 0
      })
    }
    if(this.state.universalCount === 0 && this.state.num1.length && this.state.operator1 === '-' && this.state.operator2 === '/') {
      console.log('EQ26-/')
      this.setState({
        total: this.state.total - (Number(this.state.secondN) / Number(this.state.num1)),
        screen: this.state.total - (Number(this.state.secondN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: 0
      })
    }

    // divide +/

    if(this.state.universalCount > 0 && this.state.num1.length && this.state.firstN.length && this.state.secondN.length &&
      this.state.operator1 === '+' && this.state.operator2 === '/') {
        console.log('EQ27+/')
        this.setState({
          total: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1)) + Number(this.state.firstN)),
          screen: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1)) + Number(this.state.firstN)),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '//',

        })
    }
      // divide -/ continue
    if(this.state.universalCount > 0 && this.state.num1.length && this.state.firstN.length && this.state.secondN.length &&
      this.state.operator1 === '-' && this.state.operator2 === '/') {
        console.log('EQC28-/')
        this.setState({
          total: this.state.total + (Number(this.state.firstN) - (Number(this.state.secondN) / Number(this.state.num1))),
          screen: this.state.total + (Number(this.state.firstN) - (Number(this.state.secondN) / Number(this.state.num1))),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '//',

        })
    }
      // divide -/
    if(this.state.num1.length && this.state.firstN.length  === 0 && this.state.secondN.length &&
      this.state.operator1 === '-' && this.state.operator2 === '/') {
        console.log('EQ29-/: TOTAL: ', this.state.total, 'Ave: ',(Number(this.state.secondN) / Number(this.state.num1)))
        this.setState({
          total: this.state.total - (Number(this.state.secondN) / Number(this.state.num1)),
          screen: this.state.total - (Number(this.state.secondN) / Number(this.state.num1)),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '//',
        })
    }
        //divide +/
        if(this.state.num1.length && this.state.firstN.length  === 0 && this.state.secondN.length &&
          this.state.operator1 === '+' && this.state.operator2 === '/') {
            console.log('EQ30-/: TOTAL: ', this.state.total, 'Ave: ',(Number(this.state.secondN) / Number(this.state.num1)))
            this.setState({
              total: this.state.total + (Number(this.state.secondN) / Number(this.state.num1)),
              screen: this.state.total + (Number(this.state.secondN) / Number(this.state.num1)),
              lastNumber: this.state.num1,
              num1: '',
              firstN: '',
              secondN: '',
              operator1: '',
              operator2: '',
              operator3: '//',

            })
        }
    // operator4 ---
    if(this.state.operator1 === '/' && this.state.num1 !== '' && this.state.firstN !== '' && this.state.operator4 === '---') {
      console.log('EQ31 ---')
      this.setState({
        total: this.state.total - (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total - (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '',
        operator3: '//'
      })
    }
    // operator4 +++
    if(this.state.operator1 === '/' && this.state.num1 !== '' && this.state.firstN !== '' && this.state.operator4 === '+++') {
      console.log('EQ32++')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '',
        operator3: '//'
      })
    }

    if(this.state.operator1 === '/' && this.state.num1 !== '' && this.state.firstN === '') {
      console.log('EQ33/')
      this.setState({
        total: this.state.total / Number(this.state.num1),
        screen: this.state.total / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '',
        operator3: '//'
      })
    }
    if(this.state.operator3 === '//' && this.state.num1 === '' && this.state.firstN === '' &&
      this.state.lastNumber.length) {
        console.log('EQ33//')
        this.setState({
          total: this.state.total / Number(this.state.lastNumber),
          screen: this.state.total / Number(this.state.lastNumber),
          operator1: '',
          operator2: '',
          operator3: '//',
          firstN: '',
          secondN: ''

        })
    }

    // 100 - 60 / 2
    if(this.state.universalCount === 0 && this.state.num1.length && this.state.firstN.length && this.state.secondN.length &&
      this.state.operator1 === '-' && this.state.operator2 === '/') {
        console.log('EQ34-/')
        this.setState({
          total: this.state.total + (Number(this.state.firstN) - (Number(this.state.secondN) / Number(this.state.num1))),
          screen: this.state.total + (Number(this.state.firstN) - (Number(this.state.secondN) / Number(this.state.num1))),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '//'
        })
    }
    if(this.state.universalCount > 0 && this.state.num1.length && this.state.firstN.length && this.state.secondN.length &&
      this.state.operator1 === '/' && this.state.operator2 === '*') {
        console.log('EQ35/*')
        this.setState({
          total: this.state.total + ((Number(this.state.firstN) / (Number(this.state.secondN)) * Number(this.state.num1))),
          screen: this.state.total + ((Number(this.state.firstN) / (Number(this.state.secondN)) * Number(this.state.num1))),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '**'
        })
    }
    /// EQ END
    this.setState({
      operator1: '',
      operator2: ''
    })
    console.log('END EQUAL---TOTAL: ', this.state.total)
  }

//// Multiply Click
  handleClickMultiply() {
    console.log('START OF MULTIPLY')
    console.log('ML --- Total: ', this.state.total, ' NUM1: ', this.state.num1, ' firstN: ', this.state.firstN, ' secondN: ', this.state.secondN,
                ' OP1: ', this.state.operator1, ' OP2: ', this.state.operator2, ' OP3: ', this.state.operator3, ' OP4: ', this.state.operator4,
                ' UNIV: ', this.state.universalCount)
    this.setState({
      decimalCount: 0
    })

    if(this.state.num1 === '' && this.state.operator1 === '') {
      console.log('ML1*')
      this.setState({
        operator1: '*',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.firstN === '' && this.state.num1.length && this.state.operator1 === '' ) {
      console.log('ML2*')
      this.setState({
        firstN: this.state.num1,
        screen: this.state.firstN,
        num1: '',
        operator1: '*',
        universalCount: this.state.universalCount +1
      })
    } else if(this.state.secondN === '' && this.state.num1.length ) {
      console.log('ML3*')
            this.setState({
              secondN: this.state.num1,
              screen: this.state.secondN,
              num1: '',
              operator2: '*',
              universalCount: this.state.universalCount +1
            })
    }

    if(this.state.operator1 === '+' && this.state.num1.length && this.state.firstN.length &&
      this.state.operator2 === '' && this.state.secondN.length === 0 ) {
        console.log('ML4+')
        this.setState({
          screen: this.state.num1
        })
    }

    if(this.state.operator1 === '*' && this.state.num1.length && this.state.firstN.length && this.state.operator2 === '') {
      console.log('ML5*')
      this.setState({
        total: this.state.total + ( Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + ( Number(this.state.num1) * Number(this.state.firstN)),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '*',
          operator3: '**',
          universalCount: this.state.universalCount +1
      })
    }
    if(this.state.universalCount > 0 && this.state.operator2 === '*' && this.state.num1.length && this.state.firstN.length === 0 && this.state.operator1 === '') {
      console.log('ML6*')
      this.setState({
        total: this.state.total *  Number(this.state.num1) ,
        screen: this.state.total  * Number(this.state.num1),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '',
          operator3: '**',
          universalCount: this.state.universalCount +1
      })
    }
    if(this.state.operator3 !== '//' && this.state.universalCount > 0 && this.state.operator2 === '' && this.state.num1.length && this.state.firstN.length === 0 && this.state.operator1 === '') {
      console.log('ML7*')
      this.setState({
        total: this.state.total *  Number(this.state.num1) ,
        screen: this.state.total  * Number(this.state.num1),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '',
          operator2: '*',
          operator3: '**',
          universalCount: this.state.universalCount +1
      })
    }
    // if(this.state.universalCount > 0 && this.state.operator1 === '' && this.state.num1.length === 0 && this.state.firstN.length && this.state.operator2 === '') {
    //   console.log('MULTI333')
    //   this.setState({
    //     total: this.state.total *  Number(this.state.num1) ,
    //     screen: this.state.total  * Number(this.state.num1),
    //       lastNumber: this.state.num1,
    //       num1: '',
    //       firstN: '',
    //       secondN: '',
    //       operator1: '',
    //       operator2: '',
    //       operator3: '**',
    //       universalCount: this.state.universalCount +1
    //   })
    // }
    if(this.state.universalCount > 0 && this.state.num1.length && this.state.firstN.length === 0 && this.state.secondN.length === 0 && this.state.operator1 === '*') {
      console.log('MLC8*')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '*',
        operator2: '',
        operator3: '**',
        universalCount: this.state.universalCount +1
      })
    }
    // +*
    if(this.state.num1.length !== 0 && this.state.firstN.length !== 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '+') {
        console.log('ML9C*')
      this.setState({
        total: this.state.total +  (( Number(this.state.num1) * Number(this.state.secondN) ) + Number(this.state.firstN)) ,
        screen: this.state.total +  (( Number(this.state.num1) * Number(this.state.secondN) ) + Number(this.state.firstN)),
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: ''
      })
    }
    // -*
    if(this.state.num1.length !== 0 && this.state.firstN.length !== 0 &&  this.state.firstN.length !== 0 && this.state.operator2 === '*'
      && this.state.operator1 === '-') {
        console.log('ML10-*')
      this.setState({
        total: this.state.total +  (( Number(this.state.num1) * Number(this.state.secondN) ) - Number(this.state.firstN)) ,
        screen: this.state.total +  (( Number(this.state.num1) * Number(this.state.secondN) ) - Number(this.state.firstN)),
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: ''
      })
    }

    // if(this.state.secondN.length === 0 && this.state.operator1 === '-' && this.state.operator2 === '' && this.state.universalCount > 0) {
    //   console.log('MULTI44444')
    //   this.setState({
    //     screen: this.state.num1,
    //     firstN: (Number(this.state.num1) * -1).toString(),
    //     num1: '',
    //     operator1: '-',
    //     operator2: '*',
    //     universalCount: this.state.universalCount +1
    //
    //   })
    // }

    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '+' && this.state.operator2 === '/') {
      console.log('ML11+/')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '*',
        operator2: '+',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '-' && this.state.operator2 === '/') {
      console.log('ML12-/')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '*',
        operator2: '-',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.universalCount > 0 && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '' && this.state.operator1 === '/' && this.state.operator2 === '') {
      console.log('ML13/*')
      this.setState({
        total: this.state.total / Number(this.state.num1),
        screen: this.state.total / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '*',
        operator2: '',
        operator3: '**',
        firstN: '',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.universalCount > 0 && this.state.operator3 === '//' && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '' && this.state.operator1 === '' && this.state.operator2 === '') {
      console.log('ML14//')
      this.setState({
        total: this.state.total / Number(this.state.num1),
        screen: this.state.total / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '*',
        operator2: '',
        operator3: '**',
        universalCount: this.state.universalCount +1
      })
    }
  /// Multi END
    console.log('END MULTI---TOTAL: ', this.state.total)
  }

/// divide
  handleClickDivide() {
    console.log('START OF DIVISION')
    console.log('DIV --- Total: ', this.state.total, ' NUM1: ', this.state.num1, ' firstN: ', this.state.firstN, ' secondN: ', this.state.secondN,
                ' OP1: ', this.state.operator1, ' OP2: ', this.state.operator2, ' OP3: ', this.state.operator3, ' OP4: ', this.state.operator4,
                ' UNIV: ', this.state.universalCount)
    this.setState({
      decimalCount: 0
    })
    if(this.state.num1 === '') {
      console.log('DIV1/')
      this.setState({
        operator1: '/'
      })
    }

    if(this.state.operator1 === '' && this.state.firstN === '' && this.state.num1.length ) {
      console.log('DIV2/')
      this.setState({
        firstN: this.state.num1,
        screen: this.state.num1,
        num1: '',
        operator1: '/',
        operator3: ''
      })
    } else if(this.state.secondN === '' && this.state.num1.length ) {
      console.log('DIV3/')
            this.setState({
              secondN: this.state.num1,
              screen: this.state.secondN,
              num1: '',
              operator2: '/'
            })
    }
    // if(this.state.operator1 === '/' && this.state.num1 !== '' && this.state.firstN !== '') {
    //   console.log('im in divide111/')
    //   this.setState({
    //     total: this.state.total + (Number(this.state.firstN) / Number(this.state.firstN)),
    //     screen: this.state.total + (Number(this.state.firstN) / Number(this.state.firstN)),
    //     lastNumber: this.state.num1,
    //     num1: '',
    //     operator1: '',
    //     operator3: '//'
    //   })
    // }
    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '+' && this.state.operator2 === '/') {
      console.log('DIV4+/')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '/',
        operator2: '+',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '-' && this.state.operator2 === '/') {
      console.log('DIV5-/')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) / Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '/',
        operator2: '-',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }
    // divideok +*
    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '+' && this.state.operator2 === '*') {
      console.log('DIV6+*')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) * Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) * Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '/',
        operator2: '+',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }
    // divideok-*
    if(this.state.num1.length && this.state.firstN.length && this.state.secondN.length && this.state.operator1 === '-' && this.state.operator2 === '*') {
      console.log('DIV7-*')
      this.setState({
        total: this.state.total + ((Number(this.state.secondN) * Number(this.state.num1))),
        screen: this.state.total + ((Number(this.state.secondN) * Number(this.state.num1))),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '/',
        operator2: '-',
        secondN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.num1.length && this.state.firstN === ''  && this.state.operator3.length && this.state.operator1.length) {
      console.log('DIV8')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '/',
        operator3: '//'
      })
    }
    if(this.state.universalCount > 0 && this.state.operator1 === '' && this.state.operator2 !== '' && this.state.num1.length && this.state.firstN !== '' && this.state.secondN !== '') {
      console.log('DIV9:F-xx')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '/',
        operator2: '',
        operator3: '//',
        universalCount: this.state.universalCount +1
      })
    }
    if(this.state.operator1 === '/' && this.state.secondN.length === 0  && this.state.num1.length && this.state.firstN.length && this.state.operator1.length) {
      console.log('DIV10: ', this.state.operator2)
      this.setState({
        total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: this.state.universalCount+1
      })
    }
    if(this.state.universalCount > 0 && this.state.operator1 === '' && this.state.operator2.length === 0
      && this.state.secondN.length === 0  && this.state.num1.length && this.state.firstN.length === 0 && this.state.operator3 === '//') {
      console.log('DIV10: ', this.state.operator2)
      this.setState({
        total: Number(this.state.total) / Number(this.state.num1),
        screen: Number(this.state.total) / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '',
        operator2: '',
        operator3: '//',
        universalCount: this.state.universalCount+1
      })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '*' && this.state.num1 !== '' && this.state.firstN !== '') {
      console.log('DIV11*')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) * Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) * Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '/',
        operator2: '',
        operator3: '//'
      })
    }
  }

///// Addition Click
  handleClickAddition() {
    console.log('START OF ADDITION')
    console.log('ADD --- Total: ', this.state.total, ' NUM1: ', this.state.num1, ' firstN: ', this.state.firstN, ' secondN: ', this.state.secondN,
                ' OP1: ', this.state.operator1, ' OP2: ', this.state.operator2, ' OP3: ', this.state.operator3, ' OP4: ', this.state.operator4,
                ' UNIV: ', this.state.universalCount)

    if(this.state.operator1 === '+' && this.state.operator2 === '+') {
      console.log('ADD1++')
      this.setState({
        operator1: '',
        operator2: ''
      })
    }
    this.setState({
      decimalCount: 0
    })
    if(this.state.num1 === '') {
      console.log('ADD2++')
      this.setState({
        operator1: '+',
        universalCount: this.state.universalCount +1

      })
    }

    if(this.state.firstN === '' && this.state.num1.length && this.state.operator1 === ''&& this.state.universalCount === 0) {
      console.log('ADD3++')
      this.setState({
        firstN: this.state.num1,
        screen: this.state.num1,
        num1: '',
        operator1: '+',
        operator3: '',
        universalCount: this.state.universalCount+1
      })

    } else if(this.state.secondN === '' && this.state.num1.length ) {
      console.log('ADD4++')
      this.setState({
        secondN: this.state.num1,
        screen: this.state.num1,
        num1: '',
        operator2: '+',
        operator3: ''
      })
    } else if(this.state.operator4 === '') {
      console.log('ADD5++')
      this.setState({
        operator4:'+'
      })
    }

    if(this.state.operator1 === '+' && this.state.operator2 === '+' &&
      this.state.num1.length && this.state.firstN.length && this.state.secondN.length) {
      console.log('ADD6++')
      this.setState({
        total: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        screen: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        operator1: '+',
        operator2: '',
        operator3: '++',
        operator4: '+++',
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        thirdN: '',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '+' && this.state.operator === '+' &&
      this.state.num1.length && this.state.firstN.length && this.state.secondN.length) {
      console.log('ADD7C++')
      this.setState({
        total: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        screen: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        thirdN: '',
        operator1: '+',
        operator2: '',
        operator3: '++',
        operator4: '+++',
      })
    }

    if(this.state.operator1 === '+' && this.state.operator2 === '' && this.state.firstN.length !== 0) {
      console.log('ADD8++')
      this.setState({
        total: this.state.total + (Number(this.state.num1) + Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) + Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator2: '',
        operator3: '++',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.num1 !== 0 && this.state.total !== 0 && this.state.operator1 === '+') {
      console.log('ADD9++')
      this.setState({
        total: this.state.total + Number(this.state.num1),
        screen: this.state.total + Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '++',
        universalCount: this.state.universalCount + 1
      })
    }

    if(this.state.universalCount > 0 && this.state.num1.length && this.state.operator1 === '*') {
      console.log('ADD10*')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumer: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '++'
      })
    }
    if(this.state.num1.length && this.state.operator1 === '*' && this.state.firstN.length) {
      console.log('ADD11*')
      this.setState({
        total: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        lastNumer: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '++',
        universalCount: this.state.universalCount +1
      })
    }
    // continue count
    if(this.state.operator1 === '-' && this.state.firstN.length === 0 && this.state.secondN.length === 0 && this.state.universalCount > 0) {
      console.log('ADD12-')
      this.setState({
        total: this.state.total - Number(this.state.num1),
        screen: this.state.total - Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator3: '++',
        universalCount: this.state.universalCount + 1
      })
    }

    if(this.state.operator1 === '-' && this.state.firstN.length && this.state.secondN.length === 0 ) {
      console.log('ADD13-')
      this.setState({
        total: this.state.total +  (Number(this.state.firstN) - Number(this.state.num1)),
        screen: this.state.total +  (Number(this.state.firstN) - Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator3: '++',
        universalCount: this.state.universalCount + 1
      })
    }
    if(this.state.operator1 === '/' && this.state.operator2 === '' && this.state.num1 !== '' && this.state.firstN !== '') {
      console.log('ADD14/')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '',
        universalCount: this.state.universalCount +1
      })
    }
    // if(this.state.operator1 === '/' && this.state.operator2 === '/' && this.state.num1 !== '' && this.state.firstN !== '') {
    //   console.log('add888')
    //
    //   console.log('im in divide111+++', this.state.firstN, this.state.num1)
    //   this.setState({
    //     total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
    //     screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
    //     lastNumber: this.state.num1,
    //     num1: '',
    //     firstN: '',
    //     secondN: '',
    //     operator1: '+',
    //     operator2: '',
    //     operator3: '',
    //     universalCount: this.state.universalCount +1
    //   })
    // }

    if(this.state.operator1 === '+' && this.state.operator2 === '*' && this.state.num1.length && this.state.firstN.length &&
      this.state.secondN.length) {
        console.log('ADD15+X+')
        this.setState({
          total: this.state.total + ((Number(this.state.num1) * Number(this.state.secondN)) + Number(this.state.firstN)),
          screen: this.state.total + ((Number(this.state.num1) * Number(this.state.secondN)) + Number(this.state.firstN)),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '+',
          operator2: '',
          operator3: '**',
          universalCount: this.state.universalCount + 1
        })
    }

    if(this.state.operator1 === '-' && this.state.operator2 === '*' && this.state.num1.length && this.state.firstN.length &&
      this.state.secondN.length) {
        console.log('ADD16-XC')
        this.setState({
          total: this.state.total + (Number(this.state.firstN) - (Number(this.state.num1) * Number(this.state.secondN)) ),
          screen: this.state.total + (Number(this.state.firstN) - (Number(this.state.num1) * Number(this.state.secondN)) ),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '+',
          operator2: '',
          operator3: '**',
          universalCount: this.state.universalCount + 1
        })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '+' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('ADD17L+//')
      this.setState({
        total: ((this.state.total / Number(this.state.num1)) + Number(this.state.firstN)),
        screen: ((this.state.total / Number(this.state.num1) )+ Number(this.state.firstN)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }

    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '-' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('ADD18F-//')
      this.setState({
        total: (Number(this.state.firstN) - (this.state.total / Number(this.state.num1)) ),
        screen: (Number(this.state.firstN) - (this.state.total / Number(this.state.num1)) ),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }

    if(this.state.universalCount > 0 && this.state.operator3 !== '//' && this.state.operator1 === '' && this.state.operator2 === '' && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '') {
      console.log('ADD19F*//')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '++',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.universalCount > 0 && this.state.operator3 === '//' && this.state.operator1 === '' && this.state.operator2 === '' && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '') {
      console.log('ADD20F///')
      this.setState({
        total: this.state.total / Number(this.state.num1),
        screen: this.state.total / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '+',
        operator2: '',
        operator3: '++',
        universalCount: this.state.universalCount +1
      })
    }
  }


  handleClickSubtraction() {
    console.log('START SUBTRACTION')
    console.log('SUB --- Total: ', this.state.total, ' NUM1: ', this.state.num1, ' firstN: ', this.state.firstN, ' secondN: ', this.state.secondN,
                ' OP1: ', this.state.operator1, ' OP2: ', this.state.operator2, ' OP3: ', this.state.operator3, ' OP4: ', this.state.operator4,
                ' UNIV: ', this.state.universalCount)
    this.setState({
      decimalCount: 0
    })
    if(this.state.operator1 === '') {
      console.log('SUB1')
      this.setState({
        operator1:'-',
        universalCount: this.state.universalCount +1
      })
    } else if(this.state.operator2 === '') {
      console.log('SUB2')
      this.setState({
        operator2:'-'
      })
    } else if(this.state.operator4 === '') {
      console.log('SUB3')
      this.setState({
        operator4:'-'
      })
    }

    if(this.state.num1.length && this.state.firstN.length && this.state.operator1 === '+' && this.state.operator2 === '') {
      console.log('SUB4')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) + Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) + Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount +1
      })
    }

    /// continue 3+5*6 - 2/4
    if(this.state.operator1 === '+' && this.state.operator2 === '*' &&
      this.state.num1.length && this.state.firstN.length && this.state.secondN.length) {
      console.log('SUB5')
      this.setState({
        total: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        screen: eval(Number(this.state.num1) + this.state.operator2 + Number(this.state.secondN) + this.state.operator1 + Number(this.state.firstN)),
        operator1: '-',
        operator2: '',
        operator3: '--',
        operator4: '---',
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        thirdN: ''
      })
    }

    if(this.state.operator1 === '-' && this.state.operator2 === '*' &&
      this.state.num1.length && this.state.firstN.length && this.state.secondN.length) {
      console.log('SUB6-*--')
      this.setState({
        total: this.state.total + ((-Number(this.state.num1) * Number(this.state.secondN)) + (Number(this.state.firstN))),
        screen: this.state.total + ((-Number(this.state.num1) * Number(this.state.secondN)) + (Number(this.state.firstN))),
        operator2: '',
        operator3: '--',
        operator4: '---',
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        thirdN: ''
      })
    }
    if(this.state.universalCount > 0 && this.state.operator1 === '+' && this.state.num1.length) {
      console.log('SUB7')
      this.setState({
        total: this.state.total + Number(this.state.num1),
        screen: this.state.total + Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount +1
      })
    }
    if(this.state.firstN === '' && this.state.num1.length && this.state.universalCount === 0) {
      console.log('SUB8')
      this.setState({
        firstN: this.state.num1,
        screen: this.state.num1,
        num1: '',
        operator1: '-',
        operator3: ''
      })
    } else if(this.state.secondN === '' && this.state.num1.length && this.state.operator1 === '-' && this.state.firstN.length === 0) {
      console.log('SUB9')
      this.setState({
        secondN: this.state.num1,
        screen: this.state.num1,
        num1: '',
        operator2: '-',
        operator3: ''
      })
    }
    if(this.state.universalCount === 0 && this.state.operator3 === '**') {
      console.log('SUB10**')
      this.setState({
        total: this.state.total - Number(this.state.num1),
        screen: this.state.total - Number(this.state.num1),
        lastNumer: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
      })
    }
    if(this.state.universalCount > 0 && this.state.operator1 === '' && this.state.operator2 === '' && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '') {
      console.log('SUB11C: F-xx')
      this.setState({
        total: this.state.total * Number(this.state.num1),
        screen: this.state.total * Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.operator1 === '+' && this.state.firstN.length === 0 && this.state.secondN.length === 0) {
      console.log('SUB12C+')
      this.setState({
        operator1: '-'
      })
    }

    if(this.state.universalCount === 0 && this.state.num1.length !== 0 && this.state.firstN.length !== 0 && this.state.secondN === '' && this.state.operator1 === '-') {
      console.log('SUB13C: F-xx')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount+1
      })
    }
    // if(this.state.num1 !== 0 && this.state.operator1 === '-' && this.state.universalCount > 0) {
    //   console.log('SUB4 CONTIN')
    //
    //   this.setState({
    //     total: this.state.total - Number(this.state.num1),
    //     screen: this.state.total - Number(this.state.num1),
    //     lastNumber: this.state.num1,
    //     num1: '',
    //     firstN: '',
    //     secondN: '',
    //     operator1: '-',
    //     operator2: '',
    //     operator3: '--',
    //     universalCount: this.state.universalCount + 1
    //   })
    // }
    if(this.state.num1.length && this.state.operator1 === '-' && this.state.operator2 === '' && this.state.universalCount > 0) {
      console.log('SUB14')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) - Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount + 1
      })
    }

    if(this.state.operator1 === '/' && this.state.operator2 === '' && this.state.num1 !== '' && this.state.firstN !== '') {
      console.log('SUB15/')
      this.setState({
        total: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        screen: this.state.total + (Number(this.state.firstN) / Number(this.state.num1)),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '',
        universalCount: this.state.universalCount +1
      })
    }
    if(this.state.num1.length && this.state.operator1 === '*' && this.state.firstN.length) {
      console.log('SUB16*-')
      this.setState({
        total: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        screen: this.state.total + (Number(this.state.num1) * Number(this.state.firstN)),
        lastNumer: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount +1
      })
    }

    if(this.state.operator1 === '+' && this.state.operator2 === '*' && this.state.num1.length && this.state.firstN.length &&
      this.state.secondN.length) {
        console.log('SUB17+x--')
        this.setState({
          total: this.state.total + ((Number(this.state.num1) * Number(this.state.secondN)) + Number(this.state.firstN)),
          screen: this.state.total + ((Number(this.state.num1) * Number(this.state.secondN)) + Number(this.state.firstN)),
          lastNumber: this.state.num1,
          num1: '',
          firstN: '',
          secondN: '',
          operator1: '-',
          operator2: '',
          operator3: '**',
          universalCount: this.state.universalCount + 1
        })
      }
      //here needs to be fixed
      // if(this.state.universalCount > 0 && this.state.operator1 === '/'  && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      //   console.log('Continuess +//')
      //   this.setState({
      //     total: (this.state.total / Number(this.state.num1) + Number(this.state.firstN)),
      //     screen: (this.state.total / Number(this.state.num1) + Number(this.state.firstN)),
      //     lastNumber: this.state.num1,
      //     num1: '',
      //     firstN: '',
      //     secondN: '',
      //     operator1: '-',
      //     operator2: '',
      //     operator3: '//',
      //     universalCount: ''
      //   })
      // }
    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '+' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('SUB18L-//')
      this.setState({
        total: (Number(this.state.firstN) + (this.state.total / Number(this.state.num1)) ),
        screen: (Number(this.state.firstN) + (this.state.total / Number(this.state.num1)) ),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }
    if(this.state.universalCount > 0 && this.state.operator1 === '/' && this.state.operator2 === '-' && this.state.num1.length && this.state.firstN.length && this.state.secondN === '') {
      console.log('SUB19F-//')
      this.setState({
        total: (Number(this.state.firstN) - (this.state.total / Number(this.state.num1)) ),
        screen: (Number(this.state.firstN) - (this.state.total / Number(this.state.num1)) ),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '//',
        universalCount: ''
      })
    }
    if(this.state.universalCount > 0 && this.state.operator3 === '//' && this.state.operator1 === '' && this.state.operator2 === '' && this.state.num1.length && this.state.firstN === '' && this.state.secondN === '') {
      console.log('SUB20F///')
      this.setState({
        total: this.state.total / Number(this.state.num1),
        screen: this.state.total / Number(this.state.num1),
        lastNumber: this.state.num1,
        num1: '',
        firstN: '',
        secondN: '',
        operator1: '-',
        operator2: '',
        operator3: '--',
        universalCount: this.state.universalCount +1
      })
    }
    console.log('END SUBTRACTION: TOTAL---', this.state.total)
  }

  handleClickPosNegative() {
    console.log('NePos Clicked', ' NUM1: ', this.state.num1, ' FirstN: ', this.state.firstN)
    if(this.state.num1[0] === '-' && this.state.num1.length) {
      console.log('neg num1')
      this.setState({
        num1: this.state.num1.slice(1),
        screen: this.state.num1.slice(1)
      })
    } else if (this.state.num1[0] !== '-' && this.state.num1.length) {
      console.log('neg num2')
      this.setState({
        num1: '-' + this.state.num1,
        screen: '-' + this.state.num1
      })
    }
    if(this.state.total[0] === '-' && this.state.total) {
      console.log('neg total')
      this.setState({
        total: Number(this.state.total.toString.slice(1)),
        screen: this.state.total.toString.slice(1)
      })
    } else if (this.state.total[0] !== '-' && this.state.total) {
      console.log('neg total22', typeof (this.state.total))
      this.setState({
        total: this.state.total * -1,
        screen: this.state.total * -1
      })
    }
  }

  handleClickDecimal() {
    console.log('Num1: ', this.state.num1, 'Operator: ', this.state.operator1)
    if(this.state.decimalCount === 0 && this.state.num1 === '') {
      console.log('Wooow1')
      console.log('SCREEN: ',this.state.screen)
      this.setState({
        num1: '.' + this.state.num1,
        screen: this.state.num1,
        decimalCount: this.state.decimalCount +1
      })
    }

    if(this.state.decimalCount === 0 && this.state.num1.length) {
      console.log('Wooow2')
      this.setState({
        num1: this.state.num1 + '.',
        screen: this.state.num1 + '.',
        decimalCount: this.state.decimalCount +1
      })
    }
    console.log('HELLO COUNT: ', this.state.decimalCount)

  }

  handleClickZero() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '0',
        screen: '0'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '0',
        screen: this.state.num1 + '0'
      })
    }
  }
  handleClickOne() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '1',
        screen: '1'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '1',
        screen: this.state.num1 + '1'
      })
    }
  }
  handleClickTwo() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '2',
        screen: '2'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '2',
        screen: this.state.num1 + '2'
      })
    }
  }
  handleClickThree() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '3',
        screen: '3'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '3',
        screen: this.state.num1 + '3'
      })
    }
  }
  handleClickFour() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '4',
        screen: '4'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '4',
        screen: this.state.num1 + '4'
      })
    }
  }
  handleClickFive() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '5',
        screen: '5'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '5',
        screen: this.state.num1 + '5'
      })
    }
  }
  handleClickSix() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '6',
        screen: '6'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '6',
        screen: this.state.num1 + '6'
      })
    }
  }
  handleClickSeven() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '7',
        screen: '7'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '7',
        screen: this.state.num1 + '7'
      })
    }
  }
  handleClickEight() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '8',
        screen: '8'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '8',
        screen: this.state.num1 + '8'
      })
    }
  }
  handleClickNine() {
    if(this.state.num1[0] === '0') {
      this.setState({
        num1: '9',
        screen: '9'
      })
    } else {
      this.setState({
        num1: this.state.num1 + '9',
        screen: this.state.num1 + '9'
      })
    }
  }

  render() {
    var zeroButton = {margin: '5px', fontSize: '30px', width: '150px', height:'70px', border: '2px solid black' , borderRadius: '50px', textAlign: 'left', background:'dimgray', color:'white'}
    var topRowButton = {margin: '5px', fontSize: '30px', width: '70px', height:'70px', border: '2px solid black' , borderRadius: '50px', textAlign: 'center', background:'silver', color:'black'}
    var numButton= {margin: '5px', fontSize: '30px', width: '70px', height:'70px', border: '2px solid black' , borderRadius: '50px', textAlign: 'center', background:'dimgray', color:'white'}
    var operatorButton= {margin: '5px', fontSize: '30px', width: '70px', height:'70px', border: '2px solid black' , borderRadius: '50px', textAlign: 'center', background:'orange', color:'white'}
    var grid = { display: 'grid', gridTemplateColumns: 'repeat(4, 80px)'}
    var grid2 = { display: 'grid', gridTemplateColumns: '160px 80px 80px'}
    var grid3 = { display: 'grid', gridTemplateColumns: '320px'}

    return(
        <div  style={{width:'320px', backgroundColor: 'black', borderRadius: '40px'}}>
        <div className='totalScreen' style={grid3}>
        <h1 style={{ fontSize: '50px', font: 'normal 50px Arial, sans-serif', paddingLeft: '20px', width:'280px', textAlign: 'right', fontSize:'35px', color:'white'}}>{Number(this.state.screen)}</h1>
        </div>
          <div className={'upperCalculator'} style={grid}>
            <button style={topRowButton} onClick={this.handleClickReset}>C</button>
            <button style={topRowButton} onClick={this.handleClickPosNegative}>+/-</button>
            <button style={topRowButton}>%</button>
            <button style= {operatorButton} onClick={this.handleClickDivide}>÷</button>
            <button style= {numButton} onClick={this.handleClickSeven}>7</button>
            <button style= {numButton} onClick={this.handleClickEight}>8</button>
            <button style= {numButton} onClick={this.handleClickNine}>9</button>
            <button style= {operatorButton} onClick={this.handleClickMultiply}>x</button>
            <button style= {numButton} onClick={this.handleClickFour}>4</button>
            <button style= {numButton} onClick={this.handleClickFive}>5</button>
            <button style= {numButton} onClick={this.handleClickSix}>6</button>
            <button style= {operatorButton} onClick={this.handleClickSubtraction}>-</button>
            <button style= {numButton} onClick={this.handleClickOne}>1</button>
            <button style= {numButton} onClick={this.handleClickTwo}>2</button>
            <button style= {numButton} onClick={this.handleClickThree}>3</button>
            <button style= {operatorButton} onClick={this.handleClickAddition}>+</button>
            </div>
            <div className={'bottomRowCalculator'} style={grid2}>
            <button style= {zeroButton} onClick={this.handleClickZero}>  0</button>
            <button style= {numButton} onClick={this.handleClickDecimal}>.</button>
            <button style= {operatorButton} onClick={this.handleClickEqual}>=</button>
            </div>
        </div>
    )
  }
}


export default CalculatorFrame;
